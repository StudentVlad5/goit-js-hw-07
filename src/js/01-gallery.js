import { galleryItems } from './gallery-items.js';
// Change code below this line
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

ref.containerForGallery.insertAdjacentHTML("beforebegin", galleryItem)


