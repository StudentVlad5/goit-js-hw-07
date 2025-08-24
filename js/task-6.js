// Завдання 6

const btnCreate = document.querySelector(`[data-create]`);
const btnDestroy = document.querySelector(`[data-destroy]`);
const inputNumberOfBlocks = document.querySelector(`input`);
const idBlock = document.querySelector(`#boxes`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

inputNumberOfBlocks.value = 0;

btnCreate.addEventListener("click", (e) => createBlocks(e));
btnDestroy.addEventListener("click", () => destroyBoxes());

function createBlocks(e) {
  // e.preventDefault();

  if (inputNumberOfBlocks.value <= 0 || inputNumberOfBlocks.value > 100)
    return alert("Input number from 1 to 100");
  let arrayBlock = [];
  let numberOfBlocks = inputNumberOfBlocks.value;
  destroyBoxes();
  inputNumberOfBlocks.value = numberOfBlocks;
  for (let i = 0; i < numberOfBlocks; i += 1) {
    let size = 30;
    let divElem = document.createElement("div");
    divElem.classList.add("block");
    divElem.style.width = `${size + i * 10}px`;
    divElem.style.height = `${size + i * 10}px`;
    divElem.style.backgroundColor = `${getRandomHexColor()}`;
    arrayBlock.push(divElem);
  }
  let htmlString = "";
  arrayBlock.forEach((key) => {
    htmlString += key.outerHTML;
  });
  idBlock.insertAdjacentHTML("beforeend", htmlString);
}

function destroyBoxes() {
  const destroyBlocks = document.querySelectorAll(".block");
  if (destroyBlocks.length > 0) destroyBlocks.forEach((key) => key.remove());
  inputNumberOfBlocks.value = 0;
}
