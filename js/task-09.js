const btn = document.querySelector('.change-color');
const body = document.querySelector('body');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function changeColor() {
    body.style.backgroundColor = getRandomHexColor();
}

btn.addEventListener('click', changeColor);
