// Quand la page est complètement chargée, ajoute la classe "loaded"
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Quand la page est complètement chargée
window.addEventListener('load', () => {
    // Ajoute une classe au body pour déclencher l'animation
    document.body.classList.add('loaded');
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("section-active");
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});

const carousel = document.querySelector('.carousel');

carousel.addEventListener('mouseover', () => {
    carousel.style.animationPlayState = 'paused';
});

carousel.addEventListener('mouseout', () => {
    carousel.style.animationPlayState = 'running';
});
