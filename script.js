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

const projectsContainer = document.getElementById('projects-container');

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title} image" class="project-image">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p><strong>Tech:</strong> ${project.technologies}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            `;
            
            projectsContainer.appendChild(projectCard);
        });
    })
    .catch(error => console.error('Error loading JSON:', error));
