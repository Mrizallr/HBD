// Scroll animation for buttons
window.addEventListener('scroll', function() {
    const buttons = document.getElementById('action-buttons');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        buttons.classList.add('visible-buttons');
    } else {
        buttons.classList.remove('visible-buttons');
    }
});

// Modal functions and music control
const backgroundMusic = document.getElementById('background-music');

function openModal() {
    const modal = document.getElementById('birthdayModal');
    modal.classList.add('show');
    backgroundMusic.pause(); // Pause music when modal is open
}

function closeModal() {
    const modal = document.getElementById('birthdayModal');
    modal.classList.remove('show');
    backgroundMusic.play(); // Resume music when modal is closed
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('birthdayModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Intersection Observer for gallery animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('translate-y-4');
        }
    });
}, observerOptions);

// Observe all gallery items
document.querySelectorAll('.gallery-item').forEach((item) => {
    observer.observe(item);
});

// Confetti effect function
function triggerConfetti() {
    const end = Date.now() + 3 * 1000; // confetti effect lasts 3 seconds
    const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1'];

    (function frame() {
        if (Date.now() > end) return;

        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            startVelocity: 60,
            origin: { x: 0, y: 0.5 },
            colors: colors,
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            startVelocity: 60,
            origin: { x: 1, y: 0.5 },
            colors: colors,
        });

        requestAnimationFrame(frame);
    })();
}
window.addEventListener('click', () => {
    const backgroundMusic = document.getElementById('background-music');
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    }
});
