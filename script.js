document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    const yearSpan = document.getElementById("current-year");

    hamburger.addEventListener("click", () => {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        hamburger.setAttribute('aria-expanded', String(!isExpanded));
        hamburger.setAttribute('aria-label', !isExpanded ? "Fechar menu" : "Abrir menu");
    });

    navLinks.forEach(link => link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Abrir menu');
    }));

    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
