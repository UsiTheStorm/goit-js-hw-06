const fontSizer = document.getElementById('font-size-control');
const text = document.getElementById('text');

function sizeChange(event) {
    console.dir(event.currentTarget.value);
    const size = event.currentTarget.value;
    text.style.fontSize = `${size}px`;
}

fontSizer.addEventListener('change', sizeChange);
