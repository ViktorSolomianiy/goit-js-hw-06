const allCategories = document.querySelectorAll(".item");
console.log("Number of categories:", allCategories.length);

console.log("");

allCategories.forEach(itemsEl);

function itemsEl(category) {
  const titleCategories = category.firstElementChild;
  console.log("Category:", titleCategories.textContent);
  const amountElOfCategory = titleCategories.nextElementSibling;
  console.log("Elements:", amountElOfCategory.childElementCount);
}

// const titleCategories = document.querySelectorAll("h2");

// const amountElOfCategory = document.querySelectorAll(".item > ul");

// console.log("Category:", titleCategories[0].textContent);
// console.log("Elements:", amountElOfCategory[0].children.length);

// console.log("");

// console.log("Category:", titleCategories[1].textContent);
// console.log("Elements:", amountElOfCategory[1].children.length);

// console.log("");

// console.log("Category:", titleCategories[2].textContent);
// console.log("Elements:", amountElOfCategory[2].children.length);
