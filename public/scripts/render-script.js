document.head = document.head || document.getElementsByTagName('head')[0];
import AsyncGallery from "https://docs.cloud.kabeers.network/static/research-kabeersnetwork/lightbox.js";
import {
    Drawer,
    Dialog
} from "https://docs.cloud.kabeers.network/static/research-kabeersnetwork/components/index.js";

function changeFavicon(src) {
    const link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) {
        document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
}
//import drawer and dialog;
function createResponsiveMetaTag() {
    const meta = document.createElement("meta");
    meta.name="viewport";
    meta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(meta);
}
const makeList = async (container) => {
    const allHeadings = container.querySelectorAll("h1,h2,h3");
    const tag2Space = {
        "h1": "0rem",
        "h2": "1rem",
        "h3": "1.5rem"
    }
    console.log(tag2Space["h2"])
    // h1: nest
    return `<ul class="navdrawer-nav">
      ${[...allHeadings].map(el => `<li class="nav-item">
        <a class="nav-link" data-map-id="${el.getAttribute('id')}" ${el.tagName}="tagName" onclick="document.getElementById(this.getAttribute('data-map-id')).scrollIntoView()"><div style="margin-left: ${tag2Space[el.tagName.toLowerCase()]}">${el.innerText}</div></a>
      </li>`).join("")}
    </ul>`
};
// document.addEventListener("DOMContentLoaded", async () => {
const url = "./markdown.md";
createResponsiveMetaTag(); // Fixed it
const parsed = marked.parse(await (await fetch(url))
    .text());
const container = document.querySelector("content");
container.classList.add("gallery");
container.innerHTML = parsed;
const metaData = document.querySelector("#BLOG_META_DATA");
document.title = (metaData?.getAttribute("heading") || document.querySelector("h1,h2,h3")
    .innerText) + " - Kabeer's Network Research";
await changeFavicon("https://docs.cloud.kabeers.network/favicon.ico");
document.querySelectorAll("img")
    .forEach(el => {
        el.classList.add("gallery__Image");
        el.setAttribute("data-large", el.src);
        el.setAttribute("data-description", el.getAttribute("alt"));
    });
const dialog = await (await fetch("https://docs.cloud.kabeers.network/static/research-kabeersnetwork/alert.json"))
    .json();
if (!localStorage.getItem(dialog.id)) {
    container.innerHTML += Dialog({
        title: dialog.title
    });
    localStorage.setItem(dialog.id, 1);
}
if (!metaData || !metaData.getAttribute("type") || metaData.getAttribute("type") !== "fullscreenembed") {
    container.innerHTML += Drawer({
        nav: await makeList(container),
        title: document.title
    });
    container.innerHTML += `<button class="btn btn-light" style="position:fixed; top: 1rem; left:1rem;" data-target="#knMainDrawer" data-toggle="navdrawer" type="button"><img src="https://docs.cloud.kabeers.network/c/synced/62809a4b62d2c---menu_FILL0_wght400_GRAD0_opsz48.png" style="width:1rem;height:1rem"/></button>`
}

new AsyncGallery()
// console.log(await makeList(container))
await window.__kn___internal_renderComplete();


// });