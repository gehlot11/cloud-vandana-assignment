// Array of image URLs (Updated to use your own images)
const images = [
    'photo1.jpg',
    'photo2.jpg',
    'photo3.jpg'
];

let currentIndex = 0;

// Function to show a specific slide based on index
function showSlide(index) {
    const slider = document.getElementById('slider');
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }

    // Translate the slider to show the correct image
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;

    // Update active dot
    updateDots();
}

// Function to go to the next slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Function to go to the previous slide
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Function to generate navigation dots dynamically
function createDots() {
    const dotsContainer = document.getElementById('dots');
    dotsContainer.innerHTML = ''; // Clear existing dots
    for (let i = 0; i < images.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => showSlide(i));
        dotsContainer.appendChild(dot);
    }
    updateDots();
}

// Function to update the active dot based on the current slide
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentIndex) {
            dot.classList.add('active');
        }
    });
}

// Auto-slide every 5 seconds
function autoSlide() {
    setInterval(() => {
        nextSlide();
    }, 5000);
}

// Initial setup to create dots and show the first slide
document.addEventListener('DOMContentLoaded', () => {
    createDots();
    showSlide(currentIndex);
    autoSlide(); // Start auto-sliding
});
