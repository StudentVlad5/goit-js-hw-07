import { galleryItems } from './gallery-items.js';
import * as basicLightbox from 'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js'
// Change code below this line
const ref = {
    containerForGallery: document.querySelector('.gallery'),
}

console.log(basicLightbox)

let galleryItem = '';
const buildGallery = galleryItems.map((key)=>{
     galleryItem += `
        <div class="gallery__item">
        <a class="gallery__link" href="#">
                <img
                    class="gallery__image"
                    src="${key.preview}"
                    data-source="${key.original}"
                    alt="${key.description}"
                />
                </a>
        </div>`;    
})

ref.containerForGallery.insertAdjacentHTML("afterbegin", galleryItem)

ref.containerForGallery.addEventListener(`click`,openModalWindow)

function openModalWindow (event) {
    // if(event.target.value !== ".gallery__link"){return}
    console.log(event.target.dataset.source);
    event.preventDefault();

    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${event.target.dataset.source}" width="800" height="600">
        <a>Close</a>
    </div>
`)
console.log(instance)

instance.show()
}

