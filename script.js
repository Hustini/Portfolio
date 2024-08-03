document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById("menu-button");
    const menu = document.getElementById('mobile-menu-2');
    const openIcon = document.getElementById('menu-open');
    const closeIcon = document.getElementById('menu-close');

    toggleButton.addEventListener("click", function () {
        menu.classList.toggle("hidden")
        openIcon.classList.toggle("hidden")
        closeIcon.classList.toggle("hidden")
    })
});