import { galleryItems } from './gallery-items.js';
// Change code below this line

const ref = {
    containerForGallery: document.querySelector('.gallery'),
}
let galleryItem = '';
galleryItems.map((key)=>{
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
    event.preventDefault();
	const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${event.target.dataset.source}" width="800" height="600">
    </div>
	`);
    instance.show();
    
    window.addEventListener('keydown', usingEsc);
    function usingEsc(e){
        if(!basicLightbox.visible()){return};
        if(e.key=='Escape'||e.key=='Esc'){
            e.preventDefault();
            instance.close();
            window.removeEventListener('keydown', usingEsc);
        }
}}







