const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
const item = document.createElement('li');
item.textContent = ingredient;
console.log(item.textContent);
item.classList.add('item')
list.append(item)
} 




