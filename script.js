document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector("[data-collapse-toggle]");
    const mobileMenu = document.getElementById("mobile-menu-2");
    const openIcon = toggleButton.querySelector("svg:first-child");
    const closeIcon = toggleButton.querySelector("svg:last-child");

    toggleButton.addEventListener("click", function() {
        mobileMenu.classList.toggle("hidden");
        openIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
    });
});
