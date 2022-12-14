function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  widgetEl: document.querySelector(".widget"),
  changeColor: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};

refs.changeColorBtn.addEventListener("click", onBtnChangeColorName);

function onBtnChangeColorName(event) {
  const color = getRandomHexColor();

  refs.changeColor.textContent = color;
  // console.log(getRandomHexColor());

  refs.body.style.backgroundColor = color;
}
