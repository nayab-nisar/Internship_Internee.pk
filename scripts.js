document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        errorMessage.textContent = '';
        successMessage.textContent = '';

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (name === '' || email === '' || message === '') {
            errorMessage.textContent = 'All fields are required.';
            return;
        }

        if (!isValidEmail(email)) {
            errorMessage.textContent = 'Invalid email address.';
            return;
        }

        // You can add additional validation here if needed.

        // If all validations pass, display a success message.
        successMessage.textContent = 'Form submitted successfully!';
        form.reset();
    });

    function isValidEmail(email) {
        // Simple email validation using a regular expression.
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
