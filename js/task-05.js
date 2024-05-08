const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

function capitalizeName(name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

function changeName(evt) {
    const inputValue = evt.currentTarget.value;
    if (!inputValue) {
        output.textContent = 'Anonymous';
    } else {
        output.textContent = capitalizeName(inputValue);
    }
}

input.addEventListener('input', changeName);
