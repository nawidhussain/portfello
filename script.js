
let isDragging = false;
let startX, currentX;
const slider = document.getElementById('slider');
const project1 = document.getElementById('project1');
const project2 = document.getElementById('project2');
const themeToggle = document.getElementById('theme-toggle');

// Show Project 2
function showNextSlide() {
  project1.classList.remove('active');
  project1.classList.add('previous');
  project2.classList.add('active');
}

// Show Project 1
function showPreviousSlide() {
  project2.classList.remove('active');
  project1.classList.remove('previous');
  project1.classList.add('active');
}

// Drag Start
slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  currentX = e.pageX;
  const deltaX = currentX - startX;

  if (deltaX < -100) {
    showNextSlide();
    isDragging = false;
  } else if (deltaX > 100) {
    showPreviousSlide();
    isDragging = false;
  }
});

slider.addEventListener('mouseup', () => {
  isDragging = false;
});

// Touch Support for Mobile
slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].pageX;
  isDragging = true;
});

slider.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  currentX = e.touches[0].pageX;
  const deltaX = currentX - startX;

  if (deltaX < -100) {
    showNextSlide();
    isDragging = false;
  } else if (deltaX > 100) {
    showPreviousSlide();
    isDragging = false;
  }
});

slider.addEventListener('touchend', () => {
  isDragging = false;
});

// Toggle Theme
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  
  // Change icon based on theme
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = '🌙';
  } else {
    themeToggle.textContent = '🌞';
  }
}
