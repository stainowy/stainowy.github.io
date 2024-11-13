document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll(".content-section");
    const underline = document.querySelector(".underline");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            navLinks.forEach(link => link.classList.remove("active"));
            link.classList.add("active");

            sections.forEach(section => section.classList.add("hidden"));
            document.getElementById(link.getAttribute("data-page")).classList.remove("hidden");

            underline.style.left = link.offsetLeft + "px";
            underline.style.width = link.offsetWidth + "px";
        });
    });
});

function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    const icon = document.querySelector(".theme-toggle i");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
}
