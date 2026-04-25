// =======================
// FADE-IN ANIMATION
// =======================

const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 },
);

elements.forEach((el) => observer.observe(el));

// =======================
// ACTIVE NAV HIGHLIGHT
// =======================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.id;
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("text-primary");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("text-primary");
    }
  });
});
