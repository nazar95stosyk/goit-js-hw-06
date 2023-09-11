const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener("blur", () => {
    const inputValue = inputEl.value.trim();
    const expectedLength = parseInt(inputEl.getAttribute('data-length'), 10);
    if (inputValue.length === expectedLength) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
    }
});