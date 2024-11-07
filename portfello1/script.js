const PARTICLE_COUNT = 40;
const container = document.querySelector('.animation-container');

// Random utility function
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

// Particle shape and movement patterns
const shapes = ['circle', 'square', 'triangle'];

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  // Randomly assign a shape class
  const shape = shapes[Math.floor(Math.random() * shapes.length)];
  if (shape !== 'circle') {
    particle.classList.add(shape);
  }

  // Set random position, size, and animation duration
  particle.style.left = `${getRandom(0, window.innerWidth - 30)}px`;
  particle.style.top = `${getRandom(0, window.innerHeight - 30)}px`;
  particle.style.width = `${getRandom(10, 30)}px`;
  particle.style.height = particle.style.width;
  particle.style.animationDuration = `${getRandom(4, 8)}s`;
  container.appendChild(particle);

  return particle;
}

// Create particles
const particles = [];
for (let i = 0; i < PARTICLE_COUNT; i++) {
  particles.push(createParticle());
}

// Add mouse interaction for particle repulsion effect
document.addEventListener('mousemove', (event) => {
  particles.forEach(particle => {
    const dx = particle.offsetLeft + particle.offsetWidth / 2 - event.pageX;
    const dy = particle.offsetTop + particle.offsetHeight / 2 - event.pageY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 100) {
      particle.style.transform = `translate(${dx / 5}px, ${dy / 5}px)`;
    }
  });
});

// Collision effect: particles move in random directions
setInterval(() => {
  particles.forEach(particle => {
    const randomX = getRandom(-30, 30);
    const randomY = getRandom(-30, 30);
    particle.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });
}, 1000);


// ================================
// modal
// Get all modals
const modals = {
  graphicDesign: document.getElementById("modalGD"),
  webDesign: document.getElementById("modalWD"),
  software: document.getElementById("modalS"),
  application: document.getElementById("modalA"),
};

// Get open modal buttons
const openButtons = {
  graphicDesign: document.getElementById("openModalGD"),
  webDesign: document.getElementById("openModalWD"),
  software: document.getElementById("openModalS"),
  application: document.getElementById("openModalA"),
};

// Function to open a modal
function openModal(modal) {
  modal.style.display = "block";
}

// Function to close a modal
function closeModal(modal) {
  modal.style.display = "none";
}

// Listen for open clicks
openButtons.graphicDesign.addEventListener("click", function(e) {
  e.preventDefault();
  openModal(modals.graphicDesign);
});

openButtons.webDesign.addEventListener("click", function(e) {
  e.preventDefault();
  openModal(modals.webDesign);
});

openButtons.software.addEventListener("click", function(e) {
  e.preventDefault();
  openModal(modals.software);
});

openButtons.application.addEventListener("click", function(e) {
  e.preventDefault();
  openModal(modals.application);
});

// Add close buttons functionality
document.querySelectorAll('.close').forEach(closeButton => {
  closeButton.addEventListener("click", function() {
    const modalId = this.getAttribute('data-modal');
    closeModal(modals[modalId]); // Hide the specific modal
  });
});

// Listen for outside clicks to close modals
window.addEventListener("click", function(e) {
  for (const modal of Object.values(modals)) {
    if (e.target === modal) {
      closeModal(modal); // Hide the modal if clicked outside
    }
  }
});


// ===================================
// my projects section 
function filterProjects(category) {
  const items = document.querySelectorAll('.my-projects-section .project-item');
  const filters = document.querySelectorAll('.my-projects-section .project-filters span');

  // Update active filter styling
  filters.forEach(filter => filter.classList.remove('active'));
  document.querySelector(`.my-projects-section .project-filters span[onclick="filterProjects('${category}')"]`).classList.add('active');

  items.forEach(item => {
    // Apply fade animations based on the category
    if (category === 'all' || item.classList.contains(category)) {
      item.classList.remove('fade-out');
      item.classList.add('fade-in');
    } else {
      item.classList.remove('fade-in');
      item.classList.add('fade-out');
    }
  });
}

// Initialize with all projects displayed
document.addEventListener('DOMContentLoaded', function() {
  filterProjects('all');
});


// hide navbar and show navbar while scrolling
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY < lastScrollY) {
    // Scrolling up
    navbar.classList.add("visible");
  } else {
    // Scrolling down
    navbar.classList.remove("visible");
  }
  lastScrollY = window.scrollY;
});

  document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelectorAll('.nav-item').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});


// typing style 
  const titles = ["Apps Developer", "Web Developer", "Web Designer", "UI/UX Designer"];
  let currentTitleIndex = 0;
  let charIndex = 0;
  const typingSpeed = 100; // Adjust typing speed
  const erasingSpeed = 50; // Adjust erasing speed
  const delayBetweenTitles = 2000; // Delay before typing next title

  const typedTextSpan = document.getElementById("typed-text");
  const cursorSpan = document.querySelector(".cursor");

  function type() {
    if (charIndex < titles[currentTitleIndex].length) {
      typedTextSpan.textContent += titles[currentTitleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenTitles);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = titles[currentTitleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      currentTitleIndex = (currentTitleIndex + 1) % titles.length;
      setTimeout(type, typingSpeed);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (titles.length) setTimeout(type, delayBetweenTitles);
  });



  // contact section animation
    document.addEventListener("DOMContentLoaded", function () {
        const contactSection = document.querySelector(".contact-section");

        function handleScroll() {
            const sectionPosition = contactSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3; // Adjust trigger point

            if (sectionPosition < screenPosition) {
                contactSection.classList.add("animate");
                window.removeEventListener("scroll", handleScroll); // Trigger once
            }
        }

        window.addEventListener("scroll", handleScroll);
    });

  // project section animation
    document.addEventListener("DOMContentLoaded", function () {
        const contactSection = document.querySelector(".contact-section");
        const projectsSection = document.querySelector(".my-projects-section");

        function handleScroll() {
            const contactPosition = contactSection.getBoundingClientRect().top;
            const projectsPosition = projectsSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            // Trigger animation for contact section
            if (contactPosition < screenPosition) {
                contactSection.classList.add("animate");
            }

            // Trigger animation for projects section
            if (projectsPosition < screenPosition) {
                projectsSection.classList.add("animate");
            }

            // Remove the scroll event listener if both animations have triggered
            if (contactSection.classList.contains("animate") && projectsSection.classList.contains("animate")) {
                window.removeEventListener("scroll", handleScroll);
            }
        }

        window.addEventListener("scroll", handleScroll);
    });



// about section animation
    document.addEventListener("DOMContentLoaded", function () {
        // Select the sections to observe
        const sections = document.querySelectorAll(".contact-section, .my-projects-section, .about-section");

        // Define the Intersection Observer options
        const observerOptions = {
            threshold: 0.3 // Trigger when 30% of the section is in the viewport
        };

        // Create the observer
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate"); // Add animation class
                    observer.unobserve(entry.target); // Stop observing after animation is triggered
                }
            });
        }, observerOptions);

        // Observe each section
        sections.forEach(section => {
            observer.observe(section);
        });
    });



// custom cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

const cursorEffect = document.createElement('div');
cursorEffect.classList.add('cursor-effect');
document.body.appendChild(cursorEffect);

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Move custom cursor
  cursor.style.left = `${mouseX}px`;
  cursor.style.top = `${mouseY}px`;

  // Move cursor effect (for the effect around the cursor)
  cursorEffect.style.left = `${mouseX - 30}px`;
  cursorEffect.style.top = `${mouseY - 30}px`;
});

document.querySelectorAll('a, button').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
    cursorEffect.classList.add('active');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    cursorEffect.classList.remove('active');
  });
});

