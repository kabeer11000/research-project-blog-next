import AsyncGallery from "https://docs.cloud.kabeers.network/static/research-kabeersnetwork/lightbox.js";

document.querySelectorAll(".gallery img").forEach(el => {
    el.classList.add("gallery__Image");
    el.setAttribute("data-large", el.getAttribute("src"));
    el.setAttribute("data-description", el.getAttribute("alt"));
});
new AsyncGallery();
/**
 * @param {string|ReadonlyArray<string>} paths
 */
const lazyLoadCSS = paths =>
    (Array.isArray(paths) ? paths : [paths]).forEach(href =>
        href
            ? document.querySelector("head").appendChild(
                Object.assign(document.createElement("link"), {
                    href,
                    rel: "stylesheet"
                })
            )
            : undefined
    );
lazyLoadCSS([ 'https://docs.cloud.kabeers.network/static/research-kabeersnetwork/lightbox.css'])
