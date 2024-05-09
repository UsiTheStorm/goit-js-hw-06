const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorName = document.querySelector('.color');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function changeColor() {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
    colorName.innerHTML = color;
}

btn.addEventListener('click', changeColor);
