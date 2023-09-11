const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output')
// console.log(inputEl)

inputEl.addEventListener("input", (event) => {
    const inputValue = inputEl.value.trim();
    if (inputValue === '') {
    outputEl.textContent = "Anonymous"
    } else {
        outputEl.textContent = event.currentTarget.value;
}
})