import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const ref = {
    containerForGallery: document.querySelector('.gallery'),
}

let galleryItem = '';
const buildGallery = galleryItems.map(({original,preview, description})=>{
     galleryItem += `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
                </a>
        </div>`;    
})

ref.containerForGallery.innerHTML = galleryItem;


new SimpleLightbox('.gallery__link', { 
    captionsData: "alt",  
    captionDelay: 250, 

 });
