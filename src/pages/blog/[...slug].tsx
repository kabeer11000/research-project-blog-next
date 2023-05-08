import {useEffect, useState} from "react";
import {getArticleContent} from "@/algorithims/get-article-content";
import Drawer from "@/components/Drawer/Drawer";
import Chip from "@/components/Chip/Chip";
import sanitizeHtml from 'sanitize-html';
import Script from "next/script";

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
        tagline: string,
        html: string,
        configuration: object,
        headings: Array<{ content: string, type: "h1" | "h2" | "h3", id: string, mappedId: string }>
    }
}) {
    const [open, setOpen] = useState(true);
    return (
        <div>
            {/*{JSON.stringify(content.headings)}*/}
            <link rel="stylesheet" type="text/css"
                  href="https://docs.cloud.kabeers.network/static/research-kabeersnetwork/blog.markdown.css" media="print" onload="this.media='all'"/>
            <link rel="stylesheet" type="text/css"
                  href="https://cdn.jsdelivr.net/gh/Daemonite/material@master/css/material.min.css" media="print" onload="this.media='all'"/>
            <link rel="stylesheet" type="text/css"
                  href="https://docs.cloud.kabeers.network/static/research-kabeersnetwork/lightbox.css" media="print" onload="this.media='all'"/>
            <Script defer async src="https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js"></Script>
            <Script defer async
                    src="https://docs.cloud.kabeers.network/static/research-kabeersnetwork/darkmode_init.js"></Script>
            <Script defer async
                    src="https://docs.cloud.kabeers.network/static/research-kabeersnetwork/history/history.js"></Script>
            <Script defer async src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></Script>
            <Script defer type={"module"} src={'/scripts/lightbox.js'}/>
            <button style={{position: "fixed", top: "1rem", backgroundColor: "white", left: "1rem", padding: "1rem",}}
                    onClick={() => setOpen(!open)}>
                <img
                    src="https://docs.cloud.kabeers.network/c/synced/62809a4b62d2c---menu_FILL0_wght400_GRAD0_opsz48.png"
                    style={{width: "1rem", height: "1rem"}} alt={"Hamburger"}/>
            </button>
            <Drawer PaperProps={{style: {width: '30vw', minWidth: "20rem", maxWidth: "30rem"}}}
                    onClose={() => setOpen(false)} open={open}>
                {content.image && <img style={{width: '100%', padding: 1, height: 'auto'}} src={content.image}/>}
                <div style={{padding: '1.5rem',}}>
                    <h3>{content.heading}</h3>
                    <small style={{fontSize: 15}}>{content.tagline}</small>
                    <div style={{display: 'flex', overflowX: "scroll", marginTop: "1.5rem"}}>
                        {content.tags.map(tag => <div
                                style={{marginRight: '0.5rem'}} key={tag}>
                                <Chip content={tag} close={false}/>
                            </div>
                        )}
                    </div>
                    <br/>
                    <ul className="navdrawer-nav mt-1">
                        {content.headings.map((heading, index) => (
                            <li className="nav-item" key={heading.id}>
                                <a className="nav-link"
                                   onClick={() => document.getElementById(heading.id).scrollIntoView()}>
                                    <div
                                        style={{marginLeft: index ? content.configuration.spacing[heading.type] : 0}}>
                                        {heading.content}
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <hr/>
                <div style={{padding: "1.5rem"}}>
                    <ul className="navdrawer-nav">
                        <a className="nav-item nav-link" href="https://kabeers.network/research/">Home</a>
                        <a target={"_blank"} className="nav-item nav-link"
                           href="https://kabeers.network/research/open-analytics/">Open
                            Analytics</a>
                    </ul>
                </div>
            </Drawer>
            <div style={{display: 'flex', width: '100%', justifyContent: "center"}}>
                <content className="gallery">
                    <div className={"container"} style={{
                        padding: '2rem',
                        width: '100%',
                        maxWidth: '80rem',
                        marginTop: "10rem",
                        justifySelf: "center"
                    }}
                         dangerouslySetInnerHTML={{
                             __html: sanitizeHtml(content.html, {
                                 allowedTags: [
                                     "address", "iframe", "img", "video", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4",
                                     "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div",
                                     "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre",
                                     "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn",
                                     "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp",
                                     "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption",
                                     "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr"
                                 ],
                                 disallowedTagsMode: 'discard',
                                 allowedAttributes: false,
                                 selfClosing: ['img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta'],
                                 allowedSchemes: ['http', 'https', 'ftp', 'mailto', 'tel'],
                                 allowedSchemesByTag: {},
                                 allowedSchemesAppliedToAttributes: ['href', 'src', 'cite'],
                                 allowProtocolRelative: true,
                                 enforceHtmlBoundary: false,
                                 parseStyleAttributes: true
                             })
                         }}/>
                </content>
            </div>
            <div style={{
                width: '100vw',
                height: '1rem',
                marginTop: '15rem',
                background: '#FAFAFA',
                marginBottom: 0,
                position: "fixed",
                textAlign: "center",
                bottom: 0
            }}>
                © {new Date().getFullYear()} - Kabeer‘s Network
            </div>
        </div>
    )
}
