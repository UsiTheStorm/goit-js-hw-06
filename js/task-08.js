const form = document.querySelector('.login-form');

function submitForm(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    if (!email.value || !password.value) {
        alert('Complete All Fields');
    } else {
        const data = {
            email: email.value,
            password: password.value,
        };
        console.log(data);
    }
}
form.addEventListener('submit', submitForm);
