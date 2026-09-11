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

contactForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Please complete all fields.";
    return;
  }

  const submitButton = contactForm.querySelector("button[type=\"submit\"]");
  submitButton.disabled = true;
  formMessage.textContent = "Sending your message...";

  try {
    const response = await fetch("https://formsubmit.co/ajax/floresjayar2523@gmail.com", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Portfolio message from ${name}`,
        _captcha: "false"
      })
    });

    if (!response.ok) {
      throw new Error("Message could not be sent");
    }

    formMessage.textContent = `Thanks, ${name}! Your message was sent successfully.`;
    contactForm.reset();
  } catch (error) {
    formMessage.textContent =
      "Sorry, your message could not be sent. Please email me directly.";
  } finally {
    submitButton.disabled = false;
  }
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