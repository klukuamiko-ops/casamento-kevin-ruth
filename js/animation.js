// =========================================
// GALERIE — LIGHTBOX PREMIUM
// Kevin & Ruth — 20 Novembre 2026
// =========================================

const galleryImages = document.querySelectorAll(".galeria-grid img");

let currentImage = 0;

// Création de la Lightbox
const lightbox = document.createElement("div");
lightbox.className = "lightbox";

lightbox.innerHTML = `
    <button class="lightbox-close">&times;</button>

    <button class="lightbox-prev">&#10094;</button>

    <div class="lightbox-content">
        <img class="lightbox-image" src="" alt="">
        <div class="lightbox-counter"></div>
    </div>

    <button class="lightbox-next">&#10095;</button>
`;

document.body.appendChild(lightbox);

const lightboxImage =
    lightbox.querySelector(".lightbox-image");

const lightboxCounter =
    lightbox.querySelector(".lightbox-counter");

const closeButton =
    lightbox.querySelector(".lightbox-close");

const prevButton =
    lightbox.querySelector(".lightbox-prev");

const nextButton =
    lightbox.querySelector(".lightbox-next");

// Afficher une image
function showImage(index) {

    currentImage = index;

    const image = galleryImages[currentImage];

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    lightboxCounter.textContent =
        `${currentImage + 1} / ${galleryImages.length}`;

    lightbox.classList.add("active");
}

// Cliquer sur une photo
galleryImages.forEach(function(image, index) {

    image.addEventListener("click", function() {

        showImage(index);

    });

});

// Photo précédente
prevButton.addEventListener("click", function(event) {

    event.stopPropagation();

    currentImage--;

    if (currentImage < 0) {
        currentImage = galleryImages.length - 1;
    }

    showImage(currentImage);

});

// Photo suivante
nextButton.addEventListener("click", function(event) {

    event.stopPropagation();

    currentImage++;

    if (currentImage >= galleryImages.length) {
        currentImage = 0;
    }

    showImage(currentImage);

});

// Fermer
closeButton.addEventListener("click", function() {

    lightbox.classList.remove("active");

});

// Cliquer sur le fond pour fermer
lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }

});

// Navigation avec le clavier
document.addEventListener("keydown", function(event) {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }

    if (event.key === "ArrowLeft") {
        prevButton.click();
    }

    if (event.key === "ArrowRight") {
        nextButton.click();
    }

});