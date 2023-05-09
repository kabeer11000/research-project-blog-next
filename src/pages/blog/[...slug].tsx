import {Fragment, useEffect, useState} from "react";
import {getArticleContent, IArticleContent} from "@/algorithims/get-article-content";
import Drawer from "@/components/Drawer/Drawer";
import Chip from "@/components/Chip/Chip";
import sanitizeHtml from 'sanitize-html';
import Script from "next/script";
import Head from "next/head";

export async function getStaticPaths() {
    const {articles} = await (await fetch(`https://kabeers-papers-pdf2image.000webhostapp.com/kabeer-chats-storage/research-next-articles/d62112cbb4c43e808738bc335b3cd53c.json`)).json();
    console.log(articles[0].item.path.split("/").slice(2, -1))
    return {
        paths: articles.map(({item}) => ({params: {slug: item.path.split("/").slice(2, -1)}})),
        fallback: false, // can also be true or 'blocking'
    };
}
export async function getStaticProps({params: {slug}, req}) {
    const content = await getArticleContent(slug.join("/"));
    return ({
        props: {content, slug: '/blog/' + slug.join("/"), host: process.env["HOST_NAME"]}
    })
}
// export async function getServerSideProps({params: {slug}, req}) {
//     const content = await getArticleContent(slug.join("/"));
//     return ({
//         props: {content, slug: '/blog/' + slug.join("/"), host: req.headers["host"]}
//     })
// }

export default function BlogLayout(props) {
    return (
        <Fragment>
            <Fragment>
                <link rel="stylesheet" type="text/css"
                      href="https://docs.cloud.kabeers.network/static/research-kabeersnetwork/blog.markdown.min.css"
                />
                <Script defer async
                        src="https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js"></Script>
                <Script defer async
                        src="https://docs.cloud.kabeers.network/static/research-kabeersnetwork/darkmode_init.js"></Script>
                <Script defer async
                        src="https://docs.cloud.kabeers.network/static/research-kabeersnetwork/history/history.js"></Script>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></Script>
                <Script type={"module"} src={'/scripts/lightbox.js'}></Script>

                <link rel="preconnect" href="https://docs.cloud.kabeers.network" crossOrigin/>
                {/*<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>*/}
                {/*<link*/}
                {/*    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"*/}
                {/*    rel="stylesheet"*/}
                {/*/>*/}
            </Fragment>
            <Blog {...props}/>
        </Fragment>
    )
}

function Blog({content, slug, host}: {
    slug: string, host: string,
    content: IArticleContent
}) {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (!window.sessionStorage.getItem("__kn.research.blog.next.blog-welcome:" + slug)) {
            setOpen(true);
            window.sessionStorage.setItem("__kn.research.blog.next.blog-welcome:" + slug, "1");
        }
    }, [])
    return (
        <div>
            <Head>
                <title>{content.heading.toString()} - Kabeer‘s Network Research</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="title" content={`${content.heading} - Kabeer‘s Network Research`}/>
                <meta name="description" content={content.tagline}/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content={host}/>
                <meta property="og:title" content={`${content.heading} - Kabeer‘s Network Research`}/>
                <meta property="og:description"
                      content={content.tagline}/>
                <meta property="og:image"
                      content="https://docs.cloud.kabeers.network/c/v/64595fba5b379---FvA3_8sWIAAOzaD.jpeg"/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content={`https://${host}${slug}`}/>
                <meta property="twitter:title" content={`${content.heading} - Kabeer‘s Network Research`}/>
                <meta property="twitter:description"
                      content={content.tagline}/>
                <meta property="twitter:image"
                      content={`https://screenshotlayer.com/php_helper_scripts/scl_api.php?secret_key=a0c5b235b0a61e87c78cea0111b87d74&url=https://${host}${slug}`}/>
            </Head>
            {content.type !== "fullscreenembed" && <Fragment>
                <button
                    style={{position: "fixed", top: "1rem", backgroundColor: "white", left: "1rem", padding: "1rem",}}
                    onClick={() => setOpen(!open)}>
                    <img
                        src="https://docs.cloud.kabeers.network/c/synced/62809a4b62d2c---menu_FILL0_wght400_GRAD0_opsz48.png"
                        style={{width: "1rem", height: "1rem"}} alt={"Hamburger"}/>
                </button>
                <Drawer PaperProps={{style: {width: '30vw', minWidth: "20rem", maxWidth: "30rem"}}}
                        onClose={() => setOpen(false)} open={open}>
                    {content.image && <img loading={"lazy"} style={{width: '100%', padding: 1, height: 'auto'}} src={content.image}/>}
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
            </Fragment>}
            <div style={{display: 'flex', width: '100%', justifyContent: "center"}}>
                <div className={"container gallery"} style={{
                    padding: '2rem',
                    width: '100%',
                    maxWidth: '80rem',
                    marginTop: "10rem",
                }}
                     dangerouslySetInnerHTML={{
                         __html: content.html || sanitizeHtml(content.html, {
                             allowedTags: [
                                 "address", "iframe", "img", "video", "article", "aside", "footer", "header", "h1", "h2", "h3", "h4",
                                 "h5", "h6", "hgroup", "main", "nav", "section", "blockquote", "dd", "div",
                                 "dl", "dt", "figcaption", "figure", "hr", "li", "main", "ol", "p", "pre",
                                 "ul", "a", "abbr", "b", "bdi", "bdo", "br", "cite", "code", "data", "dfn",
                                 "em", "i", "kbd", "mark", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp",
                                 "small", "span", "strong", "sub", "sup", "time", "u", "var", "wbr", "caption",
                                 "col", "colgroup", "table", "tbody", "td", "tfoot", "th", "thead", "tr"
                             ],
                             disallowedTagsMode: 'escape',
                             allowedAttributes: false,
                             selfClosing: ['img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta'],
                             allowedSchemes: ['http', 'https', 'ftp', 'mailto', 'tel'],
                             allowedSchemesByTag: {},
                             allowedSchemesAppliedToAttributes: ['href', 'src', 'cite'],
                             allowProtocolRelative: true,
                             enforceHtmlBoundary: true,
                             parseStyleAttributes: true
                         })
                     }}/>
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
