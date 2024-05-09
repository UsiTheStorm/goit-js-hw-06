const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const input = document.querySelector('input');
const boxSpace = document.querySelector('#boxes');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function createBoxes() {
    const numberOfBoxes = input.value;
    const boxes = [];

    for (let i = 0; i < numberOfBoxes; i++) {
        const box = document.createElement('div');
        const size = 30 + 10 * i;

        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.push(box);
    }

    boxSpace.append(...boxes);
}

function destroyBoxes() {
    input.value = '';
    boxSpace.innerHTML = '';
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
