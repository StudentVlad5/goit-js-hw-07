import { galleryItems } from './gallery-items.js';
console.log(galleryItems);
// Change code below this line

const ref = {
    containerForGallery: document.querySelector('.gallery'),
}

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
    console.log(event.target.dataset.source);
    document.querySelector('.gallery').onclick = () => {
    event.preventDefault();
	basicLightbox.create(`
    <div class="modal">
    <img src="${event.target.dataset.source}" width="800" height="600">
    </div>
	`).show()
}}





