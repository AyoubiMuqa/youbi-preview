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

