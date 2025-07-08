// ✅ Typing animation
var typed = new Typed(".typing", {
  strings: ["Web Developer", "Graphic Designer", "Software Engineer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true
});

// ✅ Scroll Spy
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.sidebar-nav a');

  let current = '';

  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 130;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      current = id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
window.addEventListener('load', function() {
    // 1️⃣ Hide the preloader
    document.querySelector('.load').style.display = 'none';

    // 2️⃣ Show your home section with animation
    document.querySelector('.home-section').classList.add('show');
  });
// ✅ Reveal anything with .scroll-reveal
const reveals = document.querySelectorAll('.scroll-reveal');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach((el, index) => {
  el.style.transitionDelay = `${index * 0.2}s`;
  revealObserver.observe(el);
});
