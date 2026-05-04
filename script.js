// ===========================
// CONFIGURATION
// ===========================

const WEDDING_DATE = new Date('2026-05-24T11:30:00').getTime();

// ===========================
// INITIALIZE AOS (Animations On Scroll)
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1200,
        easing: 'ease-out-cubic',
        once: false, // Changed to false to allow re-animation on scroll up
        offset: 50,
    });
});

// ===========================
// COUNTDOWN TIMER
// ===========================

function updateCountdown() {
    const now = new Date().getTime();
    const distance = WEDDING_DATE - now;

    if (distance <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    updateCountdownNumber('days', days);
    updateCountdownNumber('hours', hours);
    updateCountdownNumber('minutes', minutes);
    updateCountdownNumber('seconds', seconds);
}

function updateCountdownNumber(id, value) {
    const element = document.getElementById(id);
    if (!element) return;
    const currentValue = parseInt(element.textContent);

    if (currentValue !== value) {
        element.textContent = String(value).padStart(2, '0');
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ===========================
// MOBILE MENU TOGGLE
// ===========================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-item');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

// ===========================
// MUSIC TOGGLE
// ===========================

const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
let noteInterval;

function createNote() {
    if (!musicToggle.classList.contains('playing')) return;
    
    const notes = ['fa-music', 'fa-eighth-note', 'fa-quaver'];
    const note = document.createElement('i');
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    
    note.className = `fas ${randomNote} music-note`;
    
    // Random position and rotation
    const xOffset = (Math.random() * 60 - 30) + 'px';
    const rotation = (Math.random() * 360) + 'deg';
    
    note.style.setProperty('--x-offset', xOffset);
    note.style.setProperty('--rotation', rotation);
    note.style.left = '15px';
    note.style.top = '0';
    
    musicToggle.appendChild(note);
    
    // Remove note after animation
    setTimeout(() => {
        note.remove();
    }, 2000);
}

if (musicToggle && backgroundMusic) {
    const startMusic = () => {
        if (backgroundMusic.paused) {
            backgroundMusic.muted = false;
            backgroundMusic.play().then(() => {
                musicToggle.classList.add('playing');
                if (!noteInterval) {
                    noteInterval = setInterval(createNote, 400);
                }
            }).catch((err) => {
                console.log('Autoplay prevented:', err);
            });
        }
    };

    musicToggle.addEventListener('click', () => {
        if (backgroundMusic.muted || backgroundMusic.paused) {
            startMusic();
        } else {
            backgroundMusic.muted = true;
            backgroundMusic.pause();
            musicToggle.classList.remove('playing');
            clearInterval(noteInterval);
            noteInterval = null;
        }
    });

    // Auto-play on first user interaction anywhere on the page
    document.addEventListener('click', startMusic, { once: true });
    document.addEventListener('scroll', startMusic, { once: true });
    document.addEventListener('touchstart', startMusic, { once: true });
}

// ===========================
// SMOOTH SCROLL NAVIGATION
// ===========================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===========================
// NAVBAR SCROLL EFFECT
// ===========================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
        navbar.style.backgroundColor = 'rgba(250, 249, 246, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.backgroundColor = 'rgba(250, 249, 246, 0.95)';
        navbar.style.boxShadow = 'none';
        navbar.style.padding = '1.2rem 0';
    }
});

// ===========================
// THANK YOU MODAL CLOSE
// ===========================

const thankYouModal = document.getElementById('thankYouModal');
const closeModal = document.getElementById('closeModal');

if (thankYouModal && closeModal) {
    closeModal.addEventListener('click', () => {
        thankYouModal.classList.remove('active');
        // Redirect/Reload to index page
        window.location.href = 'index.html';
    });

    // Close on clicking outside the content
    thankYouModal.addEventListener('click', (e) => {
        if (e.target === thankYouModal) {
            thankYouModal.classList.remove('active');
            window.location.href = 'index.html';
        }
    });
}
