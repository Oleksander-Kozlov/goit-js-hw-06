const counter = document.querySelector("#counter");
const decrementButton = counter.firstElementChild;
const incrementButton = counter.lastElementChild;
const counterValue = counter.children.value;

let value = 0;

decrementButton.addEventListener("click", onClick);
function onClick() {
  value -= 1;
  counterValue.textContent = value;
}

incrementButton.addEventListener("click", onClick1);
function onClick1() {
  value += 1;
  counterValue.textContent = value;
}
