function getElementWidth(content, padding, border) {
  return !isNaN(Number.parseFloat(content)) &&
    !isNaN(Number.parseFloat(padding)) &&
    !isNaN(Number.parseFloat(border))
    ? Number.parseFloat(content) +
        Number.parseFloat(padding) * 2 +
        Number.parseFloat(border) * 2
    : "Wrong parameters";
}

let resultText = "";

resultText += `<li>${getElementWidth("50px", "8px", "4px")}</li>`;
resultText += `<li>${getElementWidth("60px", "12px", "8.5px")}</li>`;
resultText += `<li>${getElementWidth("200px", "0px", "0px")}</li>`;

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
