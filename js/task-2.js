function getShippingMessage(country, price, deliveryFee) {
  return country.length > 0 &&
    !isNaN(Number(price)) &&
    !isNaN(Number(deliveryFee))
    ? `Shipping to ${country} will cost ${price + deliveryFee} credits`
    : "Wrong parameters";
}

let resultText = "";

resultText += `<li>${getShippingMessage("Australia", 120, 50)}</li>`;
resultText += `<li>${getShippingMessage("Germany", 80, 20)}</li>`;
resultText += `<li>${getShippingMessage("Sweden", 100, 20)}</li>`;

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20));
