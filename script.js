// ===========================
// PRELOADER
// ===========================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('fade-out');
    }
});

// ===========================
// CONFIGURATION
// ===========================

const WEDDING_DATE = new Date('2026-05-24T11:30:00').getTime();

// ===========================
// INITIALIZE AOS (Animations On Scroll)
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true, // Crucial for smooth scrolling: prevents re-calculating animations on scroll-up
        offset: 50,
        disable: 'mobile' // Optional: can be set to true if mobile still lags, but once:true usually fixes it
    });
});

// ===========================
// COUNTDOWN TIMER
// ===========================

function updateCountdown() {
    const now = new Date().getTime();
    const distance = WEDDING_DATE - now;

    if (distance <= 0) {
        if (!window.celebrationStarted) {
            const timerContainer = document.querySelector('.countdown-timer');
            const section = document.querySelector('.countdown-section');

            // Hide the actual timer boxes
            if (timerContainer) timerContainer.style.display = 'none';

            // Show the Marriage Announcement in the section
            const announcement = document.createElement('div');
            announcement.className = 'timer-ended-content';
            announcement.setAttribute('data-aos', 'zoom-in');
            announcement.innerHTML = `
                <p class="section-subtitle" style="color: #ffffff;">The Day of Love is Here!</p>
                <h2 class="section-title" style="color: #ffffff; border: none; margin-bottom: 1rem;">Noel & Christeena</h2>
                <p class="invite-text" style="color: #ffffff; font-size: 1.5rem; font-style: italic;">
                    "Married Today! Our journey together starts with your blessings."
                </p>
            `;

            if (section && !section.querySelector('.timer-ended-content')) {
                section.appendChild(announcement);
            }

            startCelebration();
        }
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    updateValue('days', days);
    updateValue('hours', hours);
    updateValue('minutes', minutes);
    updateValue('seconds', seconds);
}

function startCelebration() {
    if (window.celebrationStarted) return;
    window.celebrationStarted = true;

    // Show Dedicated Celebration Popup
    const celebrationModal = document.getElementById('celebrationModal');
    const closeCelebration = document.getElementById('closeCelebration');

    if (celebrationModal) {
        celebrationModal.classList.add('active');

        if (closeCelebration) {
            closeCelebration.addEventListener('click', () => {
                celebrationModal.classList.remove('active');
            });
        }
    }

    // Start Section Fireworks
    initFireworks();

    // Start Global Confetti/Hearts/Flowers
    initGlobalCelebration();
}

let celebrationItems = [];
let celebrationCanvas, celebrationCtx;

function initGlobalCelebration() {
    celebrationCanvas = document.getElementById('celebrationCanvas');
    if (!celebrationCanvas) return;
    celebrationCanvas.classList.add('active');
    celebrationCtx = celebrationCanvas.getContext('2d');

    function resize() {
        celebrationCanvas.width = window.innerWidth;
        celebrationCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class CelebrationItem {
        constructor(x, y, isBurst = false, color = null) {
            this.x = x || Math.random() * celebrationCanvas.width;
            this.y = y || -20;
            this.size = Math.random() * 4 + 2; // Smaller "dots" as per reference
            const types = ['dot', 'confetti', 'star'];
            this.type = isBurst ? 'dot' : types[Math.floor(Math.random() * types.length)];
            this.color = color || ['#005b5c', '#d8c3b5', '#ffd700', '#ff69b4', '#ffffff'][Math.floor(Math.random() * 5)];

            if (isBurst) {
                const angle = Math.random() * Math.PI * 2;
                const force = Math.random() * 12 + 4;
                this.speedX = Math.cos(angle) * force;
                this.speedY = Math.sin(angle) * force;
                this.gravity = 0.12;
                this.friction = 0.96;
            } else {
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 3 + 2;
                this.gravity = 0;
                this.friction = 1;
            }

            this.angle = Math.random() * Math.PI * 2;
            this.spin = Math.random() * 0.2 - 0.1;
            this.alpha = 1;
            this.decay = Math.random() * 0.015 + 0.005;
        }
        draw() {
            celebrationCtx.save();
            celebrationCtx.globalAlpha = this.alpha;
            celebrationCtx.translate(this.x, this.y);
            celebrationCtx.rotate(this.angle);
            celebrationCtx.fillStyle = this.color;

            if (this.type === 'dot') {
                celebrationCtx.beginPath();
                celebrationCtx.arc(0, 0, this.size, 0, Math.PI * 2);
                celebrationCtx.fill();
            } else if (this.type === 'confetti') {
                celebrationCtx.fillRect(-this.size, -this.size / 2, this.size * 2, this.size);
            } else {
                // Small Star
                celebrationCtx.beginPath();
                for (let i = 0; i < 5; i++) {
                    celebrationCtx.lineTo(0, -this.size);
                    celebrationCtx.rotate(Math.PI * 2 / 10);
                    celebrationCtx.lineTo(0, -this.size / 2);
                    celebrationCtx.rotate(Math.PI * 2 / 10);
                }
                celebrationCtx.fill();
            }
            celebrationCtx.restore();
        }
        update() {
            if (this.gravity > 0) {
                this.speedY += this.gravity;
                this.speedX *= this.friction;
                this.speedY *= this.friction;
            }
            this.x += this.speedX;
            this.y += this.speedY;
            this.angle += this.spin;

            // Fade out burst particles slowly as they fall
            if (this.gravity > 0) {
                this.alpha -= this.decay;
            }
        }
    }

    function triggerBurst(canvas, x, y) {
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const colors = ['#005b5c', '#d8c3b5', '#ffd700', '#ff69b4', '#ffffff'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        // Push burst particles into a global array or handle locally
        // For simplicity, we'll use the existing global celebrationItems for modal and particles for section
        for (let i = 0; i < 40; i++) {
            if (canvas.id === 'celebrationCanvas') {
                celebrationItems.push(new CelebrationItem(x || Math.random() * canvas.width, y || Math.random() * canvas.height, true, color));
            }
        }
    }

    // Custom trigger for the popper (modal center)
    window.triggerPopper = () => triggerBurst(celebrationCanvas, celebrationCanvas.width / 2, celebrationCanvas.height / 2);

    function animate() {
        if (!window.celebrationStarted) return;
        requestAnimationFrame(animate);
        celebrationCtx.clearRect(0, 0, celebrationCanvas.width, celebrationCanvas.height);

        // Removed random blasts from the modal as requested

        // Keep ONLY the gentle falling elements in the modal background
        if (celebrationItems.length < 100 && Math.random() < 0.2) {
            celebrationItems.push(new CelebrationItem());
        }

        celebrationItems.forEach((item, i) => {
            item.update();
            item.draw();
            if (item.y > celebrationCanvas.height + 20 || item.alpha <= 0) {
                celebrationItems.splice(i, 1);
            }
        });
    }
    animate();
}

function initFireworks() {
    const canvas = document.getElementById('fireworksCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resize() {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.velocity = {
                x: (Math.random() - 0.5) * 8,
                y: (Math.random() - 0.5) * 12
            };
            this.alpha = 1;
            this.friction = 0.96;
            this.gravity = 0.15;
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.restore();
        }
        update() {
            this.velocity.y += this.gravity;
            this.velocity.x *= this.friction;
            this.velocity.y *= this.friction;
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.alpha -= 0.01;
        }
    }

    function createFirework() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * (canvas.height * 0.6); // Explode in top half
        const colors = ['#005b5c', '#d8c3b5', '#ffffff', '#ffd700', '#ff69b4'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        for (let i = 0; i < 60; i++) {
            particles.push(new Particle(x, y, color));
        }
    }

    function animate() {
        if (!window.celebrationStarted) return;
        requestAnimationFrame(animate);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (Math.random() < 0.08) createFirework();

        particles.forEach((p, i) => {
            if (p.alpha <= 0) {
                particles.splice(i, 1);
            } else {
                p.update();
                p.draw();
            }
        });
    }
    animate();
}

function updateValue(id, newValue) {
    const element = document.getElementById(id);
    const formattedValue = String(newValue).padStart(2, '0');
    if (element && element.textContent !== formattedValue) {
        element.textContent = formattedValue;
        const parent = element.parentElement;
        if (parent) {
            parent.classList.remove('changed');
            void parent.offsetWidth; // Trigger reflow to restart animation
            parent.classList.add('changed');
        }
    }
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// ===========================
// BACKGROUND MUSIC & ANIMATION
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const bgMusic = document.getElementById('backgroundMusic');
    const musicToggle = document.getElementById('musicToggle');
    const musicIcon = musicToggle ? musicToggle.querySelector('i') : null;
    let noteInterval;

    function createNote() {
        if (!musicToggle || !musicToggle.classList.contains('playing')) return;
        const note = document.createElement('i');
        note.className = 'fas fa-music music-note';
        const xOffset = (Math.random() * 60 - 30) + 'px';
        note.style.left = `calc(50% + ${xOffset})`;
        musicToggle.appendChild(note);
        setTimeout(() => note.remove(), 2000);
    }

    function startNotes() {
        if (!noteInterval) noteInterval = setInterval(createNote, 400);
    }

    function stopNotes() {
        clearInterval(noteInterval);
        noteInterval = null;
    }

    function playMusic() {
        if (bgMusic && bgMusic.paused) {
            bgMusic.muted = false;
            bgMusic.play().then(() => {
                if (musicToggle) musicToggle.classList.add('playing');
                startNotes();
                if (musicIcon) {
                    musicIcon.classList.remove('fa-music');
                    musicIcon.classList.add('fa-pause');
                }
            }).catch(error => console.log("Waiting for interaction..."));
        }
    }

    function handleFirstInteraction() {
        playMusic();
        document.removeEventListener('click', handleFirstInteraction);
        document.removeEventListener('touchstart', handleFirstInteraction);
        document.removeEventListener('scroll', handleFirstInteraction);
    }

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);
    document.addEventListener('scroll', handleFirstInteraction);

    if (musicToggle) {
        musicToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (bgMusic.paused) {
                bgMusic.play().then(() => {
                    musicToggle.classList.add('playing');
                    startNotes();
                    if (musicIcon) {
                        musicIcon.classList.remove('fa-music');
                        musicIcon.classList.add('fa-pause');
                    }
                });
            } else {
                bgMusic.pause();
                musicToggle.classList.remove('playing');
                stopNotes();
                if (musicIcon) {
                    musicIcon.classList.remove('fa-pause');
                    musicIcon.classList.add('fa-music');
                }
            }
        });
    }
});

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
