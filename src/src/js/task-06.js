const inputEl = document.querySelector("#validation-input");
const inputLength = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", changeInputColor);

function changeInputColor(event) {
  if (event.currentTarget.value.length === inputLength) {
    inputEl.classList.add("valid");
  } else inputEl.classList.remove("valid");
  if (event.currentTarget.value.length !== inputLength) {
    inputEl.classList.add("invalid");
  } else inputEl.classList.remove("invalid");
}
