function makeTransaction(quantity, pricePerDroid) {
  return !isNaN(Number(quantity)) && !isNaN(Number(pricePerDroid))
    ? `You ordered ${quantity} droids worth ${
        quantity * pricePerDroid
      } credits!`
    : "Wrong Params";
}

let resultText = "";

resultText += `<li>${makeTransaction(5, 3000)}</li>`;
resultText += `<li>${makeTransaction(3, 1000)}</li>`;
resultText += `<li>${makeTransaction(10, 500)}</li>`;

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
