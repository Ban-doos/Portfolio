const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light"),
    searchToggle = document.querySelector(".searchToggle"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    sidebarClose = document.querySelector(".siderbarClose"),
    navLinks = document.querySelectorAll(".nav-links a"),
    sections = document.querySelectorAll("section");

// Mode clair/sombre
let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
    body.classList.add("dark");
}

modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
    } else {
        localStorage.setItem("mode", "dark-mode");
    }
});

// Barre de recherche
searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");
});

// Sidebar
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

body.addEventListener("click", (e) => {
    let clickedElm = e.target;

    if (
        !clickedElm.classList.contains("sidebarOpen") &&
        !clickedElm.classList.contains("menu")
    ) {
        nav.classList.remove("active");
    }
});

// Détection de section active
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const id = entry.target.id;
            const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);

            if (entry.isIntersecting) {
                navLinks.forEach((link) => link.classList.remove("active"));
                navLink.classList.add("active");
            }
        });
    },
    { threshold: 0.6 }
);

sections.forEach((section) => {
    observer.observe(section);
});