document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const captionText = document.getElementById("lightbox-caption");
  const closeBtn = document.querySelector(".close-lightbox");
  
  // Select all gallery images
  const images = document.querySelectorAll(".gallery-img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
    });
  });

  // Close modal when clicking the 'X'
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking anywhere outside the image
  modal.addEventListener("click", (e) => {
    if (e.target !== modalImg) {
      modal.style.display = "none";
    }
  });
});

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