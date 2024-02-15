// Get the form element
const form = document.querySelector('form');

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form inputs
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Get the values entered by the user
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Validate name
    if (name === '') {
        alert('Please enter your name.');
        nameInput.focus();
        return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
    }

    // Validate message
    if (message === '') {
        alert('Please enter your message.');
        messageInput.focus();
        return;
    }

    // If all validations pass, you can submit the form here
    // For demonstration, let's log the values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally, you can reset the form after submission
    form.reset();
}

// Add event listener for form submission
form.addEventListener('submit', handleSubmit);
