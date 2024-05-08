const value = document.querySelector('#value');
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');

let counterValue = 0;

function onIncrementBtnClick() {
    counterValue += 1;
    value.textContent = counterValue;
}
incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
    counterValue -= 1;
    value.textContent = counterValue;
}
decrementBtn.addEventListener('click', onDecrementBtnClick);
