const form = document.querySelector('.login-form');

function submitForm(event) {
    event.preventDefault();
    console.dir(event.currentTarget.elements.email.value);
    console.dir(event.currentTarget);

    // const email = event.currentTarget.elements.email.value;
    // const password = event.currentTarget.elements.password.value;

    const { email, password } = event.currentTarget.elements;
    if (!email.value || !password.value) {
        document.insertAdjacentHTML('beforeend', 'alert("Complete All Fields")');
    } else {
        const data = {
            email: email.value,
            password: password.value,
        };
        console.log(data);
    }
}
form.addEventListener('submit', submitForm);
