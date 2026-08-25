// Mobile nav toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Header background on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.style.background = 'rgba(18,18,18,0.96)';
  } else {
    header.style.background = 'linear-gradient(to bottom, rgba(18,18,18,0.92), rgba(18,18,18,0))';
  }
});

// Demo booking form (no backend — just confirms locally)
const bookingForm = document.getElementById('bookingForm');
const formNote = document.getElementById('formNote');

if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formNote.textContent = "This is a demo form — in the live site this will send your request straight to our booking system.";
    bookingForm.reset();
  });
}
