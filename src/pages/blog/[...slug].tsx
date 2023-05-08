import {useEffect, useState} from "react";
import {getArticleContent} from "@/algorithims/get-article-content";
import Drawer from "@/components/Drawer/Drawer";
import Chip from "@/components/Chip/Chip";
import sanitizeHtml from 'sanitize-html';

export async function getServerSideProps({params: {slug}}) {
    const content = await getArticleContent(slug.join("/"));
    return ({
        props: {content}
    })
}

export default function Blog({content}: {
    content: {
        tags: Array<string>,
        heading: string,
        image: string | null,
        html: string,
        configuration: object,
        headings: Array<{ content: string, type: "h1" | "h2" | "h3", id: string, mappedId: string }>
    }
}) {
    const [open, setOpen] = useState(false);

    useEffect(() => {

    }, []);
    return (
        <div>
            <link rel="stylesheet" type="text/css"
                  href="https://docs.cloud.kabeers.network/static/research-kabeersnetwork/blog.markdown.css"/>
            <link rel="stylesheet" type="text/css"
                  href="https://cdn.jsdelivr.net/gh/Daemonite/material@master/css/material.min.css"/>
            <link rel="stylesheet" type="text/css"
                  href="https://docs.cloud.kabeers.network/static/research-kabeersnetwork/lightbox.css"/>
            <script defer src="https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js"></script>
            <script defer
                    src="https://docs.cloud.kabeers.network/static/research-kabeersnetwork/darkmode_init.js"></script>
            <script defer src="https://docs.cloud.kabeers.network/static/research-kabeersnetwork/history/history.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script type={"module"} src={'/scripts/lightbox.js'}/>
            <button style={{position: "fixed", top: "1rem", backgroundColor: "white", left: "1rem", padding: "1rem",}}
                    onClick={() => setOpen(!open)}>
                <img
                    src="https://docs.cloud.kabeers.network/c/synced/62809a4b62d2c---menu_FILL0_wght400_GRAD0_opsz48.png"
                    style={{width: "1rem", height: "1rem"}}/>
            </button>
            <Drawer PaperProps={{style: {width: '30vw', minWidth: "20rem", maxWidth: "30rem"}}}
                    onClose={() => setOpen(false)} open={open}>
                {content.image && <img style={{width: '100%', padding: 1, height: 'auto'}} src={content.image}/>}
                <hr/>
                <div style={{padding: '1.5rem',}}>
                    <h3>{content.heading}</h3>
                    <div style={{display: 'flex', marginTop: "1rem"}}>{content.tags.map(tag => <div
                        style={{marginRight: '0.5rem'}}><Chip content={tag} close={false}/></div>)}</div>
                    <ul className="navdrawer-nav">
                        {content.headings.map(heading => (
                            <li className="nav-item" key={heading.id}>
                                <a className="nav-link"
                                   onClick={() => document.getElementById(heading.id).scrollIntoView()}>
                                    <div
                                        style={{marginLeft: content.configuration.spacing[heading.type]}}>{heading.content}</div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <hr/>
                <div>
                    <ul className="navdrawer-nav">
                        <a className="nav-item nav-link" href="https://kabeers.network/research/">Home</a>
                        <a target={"_blank"} className="nav-item nav-link"
                           href="https://kabeers.network/research/open-analytics/">Open
                            Analytics</a>
                    </ul>
                </div>
            </Drawer>
            <div style={{display: 'flex', justifyContent: "center"}}>
                <content className="gallery">
                    <div style={{padding: '2rem', marginTop: "10rem", justifySelf: "center", maxWidth: '80rem'}}
                         dangerouslySetInnerHTML={{__html: sanitizeHtml(content.html, {
                                 allowedTags: [
                                     "address", "img", "video", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4",
                                     "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div",
                                     "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre",
                                     "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn",
                                     "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp",
                                     "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption",
                                     "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr"
                                 ],
                                 disallowedTagsMode: 'discard',
                                 allowedAttributes: false,
// Lots of these won't come up by default because we don't allow them
                                 selfClosing: [ 'img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta' ],
// URL schemes we permit
                                 allowedSchemes: [ 'http', 'https', 'ftp', 'mailto', 'tel' ],
                                 allowedSchemesByTag: {},
                                 allowedSchemesAppliedToAttributes: [ 'href', 'src', 'cite' ],
                                 allowProtocolRelative: true,
                                 enforceHtmlBoundary: false,
                                 parseStyleAttributes: true
                             })}}/>
                </content>
            </div>
            <div style={{
                width: '100vw',
                height: '1rem',
                marginTop: '15rem',
                background: '#FAFAFA',
                marginBottom: 0,
                textAlign: "center",
                bottom: 0
            }}>
                © {new Date().getFullYear()} - Kabeer's Network
            </div>
        </div>
    )
}
