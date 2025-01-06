document.addEventListener("DOMContentLoaded", () => {
    const scrollDownArrow = document.getElementById("scroll-down-arrow");
    const scrollToTopButton = document.getElementById("scroll-to-top");

    // Masquer la flèche de scroll vers le bas une fois que l'utilisateur a commencé à scroller
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            scrollDownArrow.style.display = "none";
        } else {
            scrollDownArrow.style.display = "block";
        }

        // Afficher ou cacher le bouton de retour en haut
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "flex";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Action pour remonter en haut
    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});
console.log("scroll.js ok");
