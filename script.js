const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

if (mobileMenuToggle && mobileNav) {
  mobileMenuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("is-open");
  });
}

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("is-open");
  });
});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Danke für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.");
    contactForm.reset();
  });
}