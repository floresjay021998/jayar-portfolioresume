/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");

  menuToggle.setAttribute("aria-label", isOpen
    ? "Close navigation"
    : "Open navigation"
  );
});


/* Close mobile menu when a link is clicked */

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});


/* =========================================
   FOOTER YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Please complete all fields.";
    return;
  }

  formMessage.textContent =
    `Thanks, ${name}! Your message has been prepared successfully.`;

  contactForm.reset();
});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
  ".skill-card, .project-card, .timeline-item, .education-card"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1
  }
);

revealElements.forEach(element => {
  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
  element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

  observer.observe(element);
});