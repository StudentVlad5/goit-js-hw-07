const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const nameContent = event.currentTarget.value.trim();
  nameContent.length
    ? (nameOutput.textContent = nameContent)
    : (nameOutput.textContent = "Anonymous");
});
