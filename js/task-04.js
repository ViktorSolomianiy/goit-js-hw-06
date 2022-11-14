// const counterValue = {
//   value: 0,

//   increment() {
//     this.value += 1;
//   },

//   decrement() {
//     this.value -= 1;
//   },
// };

// const button = document.querySelector("#counter");
// const decrementBtn = button.firstElementChild;
// const incrementBtn = button.lastElementChild;

// const valueEl = document.querySelector("#value");

// decrementBtn.addEventListener("click", function () {
//   counterValue.decrement();
//   valueEl.textContent = counterValue.value;
// });

// incrementBtn.addEventListener("click", function () {
//   counterValue.increment();
//   valueEl.textContent = counterValue.value;
// });

// Не розумію, чому не працює такий підхід, підскажіть чому, будь-ласка :( ------->

const button = document.querySelector("#counter");
const decrementBtn = button.firstElementChild;
const incrementBtn = button.lastElementChild;

const valueEl = document.querySelector("#value");

let counterValue = 0;

function decrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
