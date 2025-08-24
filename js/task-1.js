//Завдання 1

const list = document.querySelector("#categories");
const items = list.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
items.forEach((it) => {
  const h2 = it.querySelector("h2");
  if (h2) console.log(`Category: ${h2.textContent}`);
  const quantityItems = it.querySelectorAll("li");
  if (quantityItems) console.log(`Elements: ${quantityItems.length}`);
});
