// Scroll-triggered fade-ins
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--amber)' : '';
  });
});

// Nav background darkens on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 100);
});

// Mobile hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinksEl = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinksEl.classList.toggle('open');
});

// Close mobile menu when a link is clicked
navLinksEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinksEl.classList.remove('open');
  });
});
