const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', function() {
    body.classList.toggle('light-mode');
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if(name && email && message) {
        alert(`Thank you, ${name}! Your message has been simulated successfully.`);
        contactForm.reset(); // Clear the form
    } else {
        alert("Please fill out all fields.");
    }
});

  
