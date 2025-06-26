const changeSlideButtons = document.querySelectorAll("[data-change-slide-button]");
const slides = document.querySelector(".slides");
const prevName = document.getElementById("prev-name");
const nextName = document.getElementById("next-name");

function updatePreviewNames(currentIndex) {
  const total = slides.children.length;
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const prevAlt = slides.children[prevIndex].querySelector("img").alt || "Anterior";
  const nextAlt = slides.children[nextIndex].querySelector("img").alt || "Próxima";

  prevName.textContent = prevAlt;
  nextName.textContent = nextAlt;
}

changeSlideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const activeSlide = slides.querySelector("[data-active]");
    let currentIndex = Array.from(slides.children).indexOf(activeSlide);

    const direction = button.dataset.changeSlideButton === "next" ? 1 : -1;
    let newIndex = (currentIndex + direction + slides.children.length) % slides.children.length;

    activeSlide.removeAttribute("data-active");
    slides.children[newIndex].setAttribute("data-active", true);

    updatePreviewNames(newIndex);
  });
});


const initialIndex = Array.from(slides.children).findIndex(slide => slide.hasAttribute("data-active"));
updatePreviewNames(initialIndex);
