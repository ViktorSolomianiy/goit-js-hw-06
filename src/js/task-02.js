const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientEL = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const ingredientsList = document.createElement("li");
  ingredientsList.classList.add("item");
  ingredientsList.textContent = ingredient;

  return ingredientsList;
});

ingredientEL.append(...elements);

console.log(elements);

// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");

// allIngredients.insertAdjacentHTML("afterbegin", markup);

// console.log(allIngredients);
