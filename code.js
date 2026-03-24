// ==================== MOBILE NAVIGATION TOGGLE ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ==================== SMOOTH SCROLL BEHAVIOR ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || !document.querySelector(href)) return;
    });
});

// ==================== FADE-IN ON SCROLL ANIMATION ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe volunteer cards, skill items, and other elements
document.addEventListener('DOMContentLoaded', () => {
    const elementsToObserve = document.querySelectorAll(
        '.volunteer-card, .skill-item, .about-text p, .contact-info'
    );
    
    elementsToObserve.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animation = `none`;
        setTimeout(() => {
            observer.observe(el);
        }, 50);
    });
});

// ==================== ACTIVE NAVBAR LINK ON SCROLL ====================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==================== PAGE LOAD ANIMATION ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Add smooth fade-in for page load
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        document.body.style.opacity = '1';
    });
} else {
    document.body.style.opacity = '1';
}
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});