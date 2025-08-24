//Завдання 2 Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список ul.gallery.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const listGalleryElem = document.querySelector("ul.gallery");
listGalleryElem.style.display = "flex";
listGalleryElem.style.justifyContent = "center";
listGalleryElem.style.flexWrap = "wrap";
listGalleryElem.style.flexDirection = "row";
listGalleryElem.style.gap = "10px";

let htmlString = "";
if (Array.isArray(images))
  images.forEach((it) => {
    let liGalleryElem = document.createElement("li");
    liGalleryElem.classList.add("img-gallery");
    liGalleryElem.style.listStyle = "none";
    liGalleryElem.style.minHeight = "130px";
    liGalleryElem.style.objectFit = "cover";

    const imgEL = document.createElement("img");
    imgEL.src = it.url;
    imgEL.alt = it.alt;
    imgEL.style.width = "200px";
    imgEL.style.height = "100%";

    liGalleryElem.appendChild(imgEL);
    htmlString += liGalleryElem.outerHTML;
  });

listGalleryElem.insertAdjacentHTML("beforeend", htmlString);
