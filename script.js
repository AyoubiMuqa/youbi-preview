const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("is-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
  });
});

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  alert("Danke für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.");

  contactForm.reset();
});