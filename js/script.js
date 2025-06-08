// Меню для мобільних пристроїв
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Плавна прокрутка для навігації
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Закриваємо меню на мобільних пристроях
        nav.classList.remove('active');
    });
});

// Зміна шапки при прокрутці
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Відправка форми (приклад)
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Тут можна додати код для відправки форми
        // Наприклад, через Fetch API або AJAX
        
        alert('Дякую за ваше повідомлення! Я зв\'яжуся з вами найближчим часом.');
        this.reset();
    });
}

// Анімація при скролі (за допомогою Intersection Observer)
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .portfolio-item, .about-content');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
};

// Викликаємо функцію після завантаження сторінки
window.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});