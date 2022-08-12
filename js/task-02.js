// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>
// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

ingredients.map((ingredient) => {
  const itemsEl = document.createElement('li');
  itemsEl.classList.add('item');
  itemsEl.textContent = ingredient;

  listIngredients.appendChild(itemsEl);
});

// const ingredientsList = document.querySelector('#ingredients');
// const ingredientsEl = ingredients.map(
//   (ingredient) => `<li class="item">${ingredient}</li>`
// );

// ingredientsList.insertAdjacentHTML('beforeend', ingredientsEl);
