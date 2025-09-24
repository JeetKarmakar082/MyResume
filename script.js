// ScrollReveal Animations
ScrollReveal().reveal('section h2', { 
  delay: 200, 
  origin: 'bottom', 
  distance: '40px',
  duration: 800
});

ScrollReveal().reveal('.card, .skill, .project-card, .social-links a, .contact-box', { 
  interval: 150, 
  origin: 'bottom', 
  distance: '30px',
  duration: 800
});

// Smooth scroll for navbar links
document.querySelectorAll('.navbar nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
