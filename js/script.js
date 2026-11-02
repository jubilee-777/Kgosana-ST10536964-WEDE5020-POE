// Lightbox JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("lightbox-modal");
    const modalImg = document.getElementById("lightbox-img");
    const captionText = document.getElementById("lightbox-caption");
    const closeBtn = document.querySelector(".close-lightbox");

    const images = document.querySelectorAll(".gallery-img");

    images.forEach((img) => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target !== modalImg) {
            modal.style.display = "none";
        }
    });
});

// AJAX Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("form-feedback");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Stop default form submit page reload

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Clear previous feedback
      formFeedback.textContent = "";
      formFeedback.className = "form-feedback";

      // Basic Validation Checks
      if (name === "" || email === "" || message === "") {
        formFeedback.textContent = "Please fill in all required fields.";
        formFeedback.classList.add("error");
        return;
      }

      // Email Format Check Regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formFeedback.textContent = "Please enter a valid email address.";
        formFeedback.classList.add("error");
        return;
      }

      // Simulate AJAX Asynchronous Submission
      formFeedback.textContent = "Sending message...";
      formFeedback.classList.add("info");

      setTimeout(() => {
        formFeedback.textContent = "Thank you! Your message has been sent successfully.";
        formFeedback.className = "form-feedback success";
        contactForm.reset();
      }, 1200);
    });
  }
});