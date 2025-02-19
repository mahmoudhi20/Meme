let currentIndex = 0;
const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function updateLightbox() {
    const newSrc = images[currentIndex].src;

    // Remove the "show" class to reset animation
    lightboxImg.classList.remove('show');

    // Wait a short delay to allow CSS transition to apply
    setTimeout(() => {
        lightboxImg.src = newSrc;
        lightboxImg.classList.add('show'); // Apply the animation
    }, 50);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
}

// Ensure lightbox is hidden on page load
document.addEventListener("DOMContentLoaded", function () {
    lightbox.style.display = 'none';
});
