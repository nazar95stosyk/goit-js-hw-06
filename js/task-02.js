const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');
const arr = [];
ingredients.forEach(ingredient => {
  const liElem = document.createElement('li');
  liElem.textContent = ingredient;
  liElem.classList.add('item');
  arr.push(liElem);
});
// console.log(arr);
listIngredients.append(...arr);
// console.log(listIngredients);