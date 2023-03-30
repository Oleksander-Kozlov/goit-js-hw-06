// змінні для HTML-eлементів
const optionals = document.querySelector("#controls"); 
const clear = optionals.lastElementChild;
const numInput = optionals.firstElementChild;
const btnCreate = optionals.firstElementChild.nextElementSibling;
const container = document.querySelector("#boxes");

// відслідковування кількості дівів 
let boxes = 0;
numInput.addEventListener("input", quantity);
function quantity(evt) {
  return (boxes = Number.parseInt(evt.currentTarget.value));
}

// функція рандомного кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Слухач кнопки Create
btnCreate.addEventListener("click", createBoxes);


function createBoxes() {
  const items = [];
  
  for (let i = 0; i < boxes; i++ ) {
    const color = getRandomHexColor();
    const item = document.createElement("div");
    item.classList = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.style.width = `${10*i+20}px`;
    item.style.height = `${10 * i + 20}px`;
    item.classList.add("item");
    items.push(item);
  }
  container.append(...items);
}
// Слухач кнопки Destroy
clear.addEventListener("click", Destroy);

function Destroy() {
  container.innerHTML = "";
}
