import {parse} from "node-html-parser";
import {marked} from "marked";

export interface IArticleContent {
    tags: Array<string>,
    heading: string,
    image: string | null,
    html: string,
    configuration: object,
    headings: Array<{ content: string, type: "h1" | "h2" | "h3", id: string, mappedId: string }>
}

export async function getArticleContent(slug: string): Promise<IArticleContent> {
    const document = await (await fetch(`https://cdn.jsdelivr.net/gh/kabeer11000/docs-hosted@redirector-content/law.research.kabeersnetwork.tk/blog/${slug}/markdown.md`, {cache: "force-cache"}))
        .text();
    const parsedDocument = await parse(document);
    const META_DATA = parsedDocument.querySelector("#BLOG_META_DATA");
    const headings = [];
    parsedDocument.querySelectorAll("h1,h2,h3").map(el => headings.push({
        content: el.innerText,
        type: el.tagName.toLowerCase(),
        id: el.getAttribute('id'),
        mappedId: el.getAttribute('data-map-id') ?? ""
    }));
    return {
        tags: META_DATA
            ? (META_DATA.getAttribute("tags")?.length ? (META_DATA.getAttribute("tags")?.toString())?.split("|")?.map(t => (t.toString() + "").trim()) : []) : [],
        headings,
        heading:
            (META_DATA
                ? META_DATA.getAttribute("heading")
                : parsedDocument.querySelector("h1,h2,h3")?.textContent) ?? "Untitled",
        image: (META_DATA
            ? META_DATA.getAttribute("cover-image")
            : parsedDocument.querySelectorAll("img")[0]?.getAttribute("src")) ?? null,
        html: marked(META_DATA ? parsedDocument.removeChild(META_DATA).outerHTML : parsedDocument.outerHTML),
        configuration: {
            spacing: {
                "h1": "0rem",
                "h2": "1rem",
                "h3": "1.5rem"
            }
        }
    };
}