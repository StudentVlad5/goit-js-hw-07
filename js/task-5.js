// Завдання 5

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(`button.change-color`);
const bodyColorBackground = document.querySelector("body");
const valueCurentColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", () => {
  const currentColor = getRandomHexColor();
  bodyColorBackground.style.backgroundColor = currentColor;
  valueCurentColor.textContent = currentColor;
});
