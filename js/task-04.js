const counterValue = document.querySelector('#value');
counterValue.value = 0;

const decButton = document.querySelector('button[data-action="decrement"]');
const incButton = document.querySelector('button[data-action="increment"]');

decButton.addEventListener('click', () => {
    counterValue.value -= 1;
    counterValue.textContent = counterValue.value;
});
incButton.addEventListener('click', () => {
    counterValue.value += 1;
    counterValue.textContent = counterValue.value;
});