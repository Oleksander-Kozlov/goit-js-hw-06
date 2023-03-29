const fontSizeChanger = document.querySelector("#font-size-control");

const textExemple = fontSizeChanger.nextElementSibling.nextElementSibling;

fontSizeChanger.addEventListener("input", ranger)

function ranger(evt) {
    textExemple.style.fontSize = `${evt.currentTarget.value}px`
 };