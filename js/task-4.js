// Завдання 4

const form = document.querySelector("form.login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value.trim();
  const password = formElements.password.value.trim();
  if (!mail || !password) {
    alert("All form fields must be filled in");
  } else {
    const DataElements = {
      mail,
      password,
    };
    console.log(DataElements);
    form.reset();
  }
}
