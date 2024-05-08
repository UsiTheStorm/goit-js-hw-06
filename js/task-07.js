const fontSizer = document.getElementById('font-size-control');
const text = document.getElementById('text');

function sizeChange(event) {
    const size = event.currentTarget.value;
    text.style.fontSize = `${size}px`;
}

fontSizer.addEventListener('input', sizeChange);
