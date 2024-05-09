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
    const amount = input.value;
    const divs = [];
    console.dir(input);
    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement('div');
        box.style.width = `${30 + 10 * i}px`;
        box.style.height = `${30 + 10 * i}px`;
        box.style.backgroundColor = getRandomHexColor();
        console.log(box);
        divs.push(box);
    }
    boxSpace.append(...divs);
    // console.log(divs);
}

function destroyBoxes() {
    input.value = '';
    boxSpace.innerHTML = '';
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
