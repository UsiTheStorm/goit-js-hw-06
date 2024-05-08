const value = document.querySelector('#value');
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');

let counterValue = 0;

function plus() {
    counterValue += 1;
    value.textContent = counterValue;
}
function minus() {
    counterValue -= 1;
    value.textContent = counterValue;
}
incrementBtn.addEventListener('click', plus);
decrementBtn.addEventListener('click', minus);
