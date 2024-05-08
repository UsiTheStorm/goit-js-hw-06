const input = document.querySelector('#validation-input');

function lengthValidate(evt) {
    const dataLength = Number(input.getAttribute('data-length'));
    const inputLength = evt.currentTarget.value.length;

    if (inputLength === dataLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}
input.addEventListener('blur', lengthValidate);
