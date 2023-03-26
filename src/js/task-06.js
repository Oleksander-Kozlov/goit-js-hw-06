const textInput = document.querySelector('#validation-input')

textInput.addEventListener("blur", inputCssStyle);

function inputCssStyle() {
     if (textInput.value.trim().length !== Number.parseInt(textInput.dataset.length)) {
        textInput.classList.add('invalid')
    } else {
        textInput.classList.remove('invalid')
        textInput.classList.add('valid')
    }
}
console.log(textInput.value);