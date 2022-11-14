const elements = {
  input: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

elements.input.addEventListener("input", onInputChangeName);

function onInputChangeName(event) {
  elements.nameOutput.textContent = event.currentTarget.value;
  console.log(event.currentTarget.value);

  if (event.currentTarget.value === "") {
    elements.nameOutput.textContent = "Anonymous";
  }
}
