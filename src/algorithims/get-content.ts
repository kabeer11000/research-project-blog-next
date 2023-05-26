const API = !!(parseInt(process.env.USE_API_PROXY)) ? "https://kabeers.network/research-blog-api" : "https://api.github.com/repos/kabeer11000/docs-hosted/contents/law.research.kabeersnetwork.tk/blog";
export const base = (path: undefined | string) => `${API}${path ? "" + path : ""}?ref=redirector-content`;
export const getDirectoryContent = async (path: undefined | string) => {
    const response = await fetch(base(path));
    const r = await response.json();
    console.log(r)
    return r
}
export const getFilesFromDirectory = async (path?: undefined | string, cache?) => {
    if (cache) return JSON.parse(require("fs").readFileSync("/Users/asadrizvi/Documents/Projects/research-projects/blog-next/public/files/directory.json", {encoding: 'utf-8'}))
    let files = new Set();
    const folder = await getDirectoryContent(path);
    for (const item of folder) {
        if (item.type === "dir") files = new Set([...files, ...await getFilesFromDirectory(`${path ?? ""}/${item.name}`), cache]);
        if (item.name === "markdown.md") files.add(item);
    }
    require("fs").writeFileSync("/Users/asadrizvi/Documents/Projects/research-projects/blog-next/public/files/directory.json", JSON.stringify([...files]), 'utf-8');
    return [...files];
}
