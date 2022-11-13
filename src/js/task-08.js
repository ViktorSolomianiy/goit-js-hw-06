const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };

  if (email === "" || password === "") {
    alert("Заповніть всі поля");
    return;
  }

  console.log(formData);
  formEl.reset();
}
