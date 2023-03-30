const optionals = document.querySelector("#controls"); 

const container = document.querySelector("#boxes");

const clear = optionals.lastElementChild;
const numInput = optionals.firstElementChild;
const btnCreate = optionals.firstElementChild.nextElementSibling;
btnCreate.addEventListener("click", createBoxes);
let boxes = 0
numInput.addEventListener("input", quantity)
function quantity(evt) {
  return boxes = Number.parseInt(evt.currentTarget.value);
 }
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

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

clear.addEventListener("click", onClick);

function onClick() {
  container.innerHTML = "";
}
// let divTotal = [];
// let step = 0;
// function createBoxes(amount) {

// function quantity(evt) {
//   amount = evt.value;
//   for (let i = 1; i < amount; i += 1) {
//     const container = document.createElement("div");
//     step += 10;
//     container.style.width = `${20 + step}px`;
//     container.style.height = `${20 + step}px`;
//     const currentСolor = getRandomHexColor();
//     container.style.backgroundColor = currentСolor;
//     divTotal.push(item);
//   }
// }

//   // createBoxes(numBoxes);    
// }



// function onClick(evt) { 
//   for (let i = 1; i<
// }





// 




// function onClick(evt) {
//   step += 10;
//   container.style.width = `${20+step}px`;
//   container.style.height = `${20+step}px`;
// const currentСolor = getRandomHexColor()
// container.style.backgroundColor = currentСolor;
// }

// function destroyBoxes() {
  
// };
