function showSection(sectionId) {
    const sections = document.querySelectorAll('.gallery');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'flex';
}

function openLightbox(imageSrc, captionText) {
    document.getElementById('lightbox-image').src = imageSrc;
    document.getElementById('lightbox-caption').textContent = captionText;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Adding event listeners to images
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        openLightbox(img.src, img.alt);
    });
});
