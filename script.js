const menuBtn = document.getElementById('menuBtn');
const menuClose = document.getElementById('menuClose');
const fullMenu = document.getElementById('fullMenu');

menuBtn.addEventListener('click', () => {
    fullMenu.classList.add('active');
});

menuClose.addEventListener('click', () => {
    fullMenu.classList.remove('active');
});

// Close menu when clicking a link
document.querySelectorAll('.full-menu-items a').forEach(link => {
    link.addEventListener('click', () => {
        fullMenu.classList.remove('active');
    });
});

// Smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.service-item, .bouquet-card, .contact-box-wrapper, .info-card, .custom-info').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
});

// Add stagger effect to service items
document.querySelectorAll('.service-item').forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.1}s`;
});

// Parallax effect for circular frames
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const frames = document.querySelectorAll('.circular-frame, .medallion');
    frames.forEach(frame => {
        const speed = 0.3;
        frame.style.transform = `translateY(${scrolled * speed}px)`;
    });
});