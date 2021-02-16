import items from "./gallery-items.js";

const ulRef = document.querySelector(".js-gallery");
const lightboxRef = document.querySelector(".js-lightbox");
const modalImgRef = document.querySelector(".lightbox__image");
const closeModalRef = document.querySelector('[data-action="close-lightbox"]');
const overlayRef = document.querySelector(".lightbox__overlay");

ulRef.addEventListener("click", onGalleryClick);
ulRef.addEventListener("click", onImageClick);
closeModalRef.addEventListener("click", onCloseModal);
overlayRef.addEventListener("click", onClickOverlay);

const createGallery = items.map(
  (
    item
  ) => `<li class="gallery__item"><a class="gallery__link" href=${item.original}>
<img class="gallery__image" src=${item.preview} data-source=${item.original} 
alt=${item.description}/></a></li>`
);
ulRef.insertAdjacentHTML("afterbegin", [...createGallery].join(""));

function onGalleryClick() {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") return;
}
function onImageClick() {
  lightboxRef.classList.add("is-open");
  modalImgRef.setAttribute("src", event.target.dataset.source);
}
function onCloseModal() {
  lightboxRef.classList.remove("is-open");
  modalImgRef.removeAttribute("src");
}
function onClickOverlay() {
  lightboxRef.classList.remove("is-open");
}

window.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    lightboxRef.classList.remove("is-open");
  }
});
