import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "../node_modules/simplelightbox/dist/simple-lightbox.esm.js"
// Change code below this line

console.log(galleryItems);

const ref = {
    containerForGallery: document.querySelector('.gallery'),
}

let galleryItem = '';
const buildGallery = galleryItems.map((key)=>{
     galleryItem += `
        <div class="gallery__item">
        <a class="gallery__link" href="${key.original}">
                <img
                    class="gallery__image"
                    src="${key.preview}"
                    data-source="${key.original}"
                    alt="${key.description}"
                />
                </a>
        </div>`;    
})

ref.containerForGallery.innerHTML = galleryItem;


new SimpleLightbox('.gallery__link', { 
    
 });