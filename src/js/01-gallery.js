import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(item => {
        return ` <a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
  `
    }).join("");

}

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryList.innerHTML = galleryMarkup;


galleryList.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
    event.preventDefault();
    const isGalleryImage = event.target.classList.contains("gallery__image");
    if (!isGalleryImage) {
        return;
    }
}

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});