const form = document.querySelector('.login-form');

function handleFormSubmission(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    if (!email.value || !password.value) {
        // eslint-disable-next-line no-alert
        alert('Please fill out all fields');
    } else {
        const formData = {
            email: email.value,
            password: password.value,
        };
        console.log(formData);
        event.currentTarget.reset();
    }
}
form.addEventListener('submit', handleFormSubmission);
