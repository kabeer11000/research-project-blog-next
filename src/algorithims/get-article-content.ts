import {parse} from "node-html-parser";
import {marked} from "marked";

export interface IArticleContent {
    tags: Array<string>,
    heading: string,
    image: string | null,
    html: string,
    type: string | null,
    configuration: object,
    tagline: string,
    markdown: string,
    headings: Array<{ content: string, type: "h1" | "h2" | "h3", id: string, mappedId: string }>
}

export async function getArticleContent(slug: string): Promise<IArticleContent> {
    const markdown = await (await fetch(`https://cdn.jsdelivr.net/gh/kabeer11000/docs-hosted@redirector-content/law.research.kabeersnetwork.tk/blog/${slug}/markdown.md`, {cache: "no-cache"}))
        .text();
    const document = marked(markdown);
    const parsedDocument = await parse(document);
    const META_DATA = parsedDocument.querySelector("#BLOG_META_DATA");
    const headings = [];
    parsedDocument.querySelectorAll("h1, h2, h3").forEach(el => headings.push({
        content: el.innerText,
        type: el.tagName.toLowerCase(),
        id: el.getAttribute('id'),
        mappedId: el.getAttribute('data-map-id') ?? ""
    }));
    const text = [];
    parsedDocument.querySelectorAll("img, iframe").forEach((el) => el.setAttribute("loading", 'lazy').setAttribute("fetchpriority", "low"));
    parsedDocument.querySelectorAll("p, pre").forEach((el) => text.push(el.textContent));
    parsedDocument.querySelectorAll("iframe").forEach((el) => {
        const currentSrc = new URL(el.getAttribute("src"));
        const searchParams = new URLSearchParams(currentSrc.search);
        if (currentSrc.pathname.split("/").pop() !== "viewer.html") return;
        console.log("found the iframe")
        searchParams.append("e", "1");
        searchParams.append("func", "__KN_EMBEDDED_VIEWER_OPEN_DRAWER");
        searchParams.append("origin", process.env.ORIGIN);
        searchParams.append("button", "intro");
        el.setAttribute("kn-instance", "dqGHF");
        el.setAttribute("src", (currentSrc.origin).concat(currentSrc.pathname).concat(currentSrc.hash).concat("?" + searchParams.toString()));
    });
    // console.log(markdown)
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
        type: META_DATA
            ? <string>META_DATA.getAttribute("type") ?? null
            : null ?? null,
        tagline: META_DATA
            ? META_DATA.getAttribute("excerpt") ?? ""
            : text.join().substring(0, 100).concat("... ") || "",
        html: parsedDocument.toString(),
        markdown: markdown ?? "",
        configuration: {
            spacing: {
                "h1": "0rem",
                "h2": "1rem",
                "h3": "1.5rem"
            }
        }
    };
}