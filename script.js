document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll(".content-section");
    const underline = document.querySelector(".underline");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            // Switch active class
            navLinks.forEach(link => link.classList.remove("active"));
            link.classList.add("active");

            // Show the selected section and hide others
            sections.forEach(section => section.classList.add("hidden"));
            document.getElementById(link.getAttribute("data-page")).classList.remove("hidden");

            // Move the underline
            underline.style.left = link.offsetLeft + "px";
            underline.style.width = link.offsetWidth + "px";
        });
    });
});

function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    // Toggle the icon between sun and moon
    const icon = document.querySelector(".theme-toggle i");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
}
