import {parse} from "node-html-parser";

export const getArticle = (item) => new Promise(async (resolve) => {
        console.log('fetching article', "https://cdn.jsdelivr.net/gh/kabeer11000/docs-hosted@redirector-content/" +
            item.path)
        const markdown = await (
            await fetch(
                "https://cdn.jsdelivr.net/gh/kabeer11000/docs-hosted@redirector-content/" +
                item.path
            )
        ).text();
        const doc = parse(markdown);

        const text = [];
        doc.querySelectorAll("p,pre").forEach((el) => text.push(el.textContent));
        const META_DATA = doc.querySelector("#BLOG_META_DATA");
        return resolve({
            item: item,
            // FIXED Added Tag Support
            tags: META_DATA
                ? (META_DATA.getAttribute("tags")?.length ? (META_DATA.getAttribute("tags")?.toString())?.split("|")?.map(t => (t.toString() + "").trim()) : []) : [],
            heading:
                (META_DATA
                    ? META_DATA.getAttribute("heading")
                    : doc.querySelector("h1,h2,h3")?.textContent) || "Untitled",
            excerpt: META_DATA
                ? META_DATA.getAttribute("excerpt") ?? ""
                : text.join().substring(0, 100) || "",
            image: META_DATA
                ? META_DATA.getAttribute("cover-image")
                : doc.querySelectorAll("img")[0]?.getAttribute("src"),
        });
    });
