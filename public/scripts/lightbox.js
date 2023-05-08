import AsyncGallery from "https://docs.cloud.kabeers.network/static/research-kabeersnetwork/lightbox.js";

document.querySelectorAll("content > img").forEach(el => {
    el.classList.add("gallery__Image");
    el.setAttribute("data-large", el.getAttribute("src"));
    el.setAttribute("data-description", el.getAttribute("alt"));
});
new AsyncGallery();