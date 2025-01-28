document.querySelectorAll(".unique-toggle-icon").forEach((icon) => {
  icon.addEventListener("click", function () {
    console.log("clicked");
    const content = icon
      .closest(".unique-course-accordion")
      .querySelector(".unique-course-content");
    const isActive = content.style.display === "block";

    // Toggle accordion content visibility
    content.style.display = isActive ? "none" : "block";

    // Rotate icon based on content visibility
    icon.style.transform = isActive ? "rotate(0deg)" : "rotate(-90deg)";
  });
});

const sliderContainer = document.querySelector(".custom-slider-container");
const prevButton = document.querySelector(".custom-prev");
const nextButton = document.querySelector(".custom-next");
const modals = document.querySelectorAll(".custom-modal");
const viewMoreLinks = document.querySelectorAll(".custom-view-more");
const closeButtons = document.querySelectorAll(".custom-close-button");
console.log(prevButton);
let currentIndex = 0;

function updateSliderPosition() {
  const cardWidth = document.querySelector(".custom-card").offsetWidth;
  sliderContainer.style.transform = `translateX(${
    -currentIndex * cardWidth
  }px)`;
}

prevButton.addEventListener("click", () => {
  console.log("clicked");
  if (currentIndex > 0) {
    currentIndex--;
  }
  updateSliderPosition();
});

nextButton.addEventListener("click", () => {
  if (currentIndex < document.querySelectorAll(".custom-card").length - 3) {
    currentIndex++;
  }
  updateSliderPosition();
});

viewMoreLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default button behavior
    const modalId = link.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "block";
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modals.forEach((modal) => (modal.style.display = "none"));
  });
});

window.addEventListener("click", (event) => {
  if (event.target.classList.contains("custom-modal")) {
    event.target.style.display = "none";
  }
});

// Function to open modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "block";
  }
}

// Function to close modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }
}

// Attach openModal and closeModal functions to appropriate elements
viewMoreLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const modalId = link.getAttribute("data-modal");
    openModal(modalId);
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    closeModal(modalId);
  });
});

window.addEventListener("click", (event) => {
  if (event.target.classList.contains("custom-modal")) {
    closeModal(event.target.id);
  }
});
// Get elements


