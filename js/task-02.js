const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
let liTotal = [];
for (const ingredient of ingredients) {
const item = document.createElement('li');
item.textContent = ingredient;
item.classList.add('item')
liTotal.push(item)
} 
const markup = liTotal.map(item => item).join('')
// list.append(markup)
list.insertAdjacentHTML("beforeend", markup)
// console.log(liTotal);

