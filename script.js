document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('[data-carousel="slide"]');
    const items = carousel.querySelectorAll('[data-carousel-item]');
    const nextButton = carousel.querySelector('[data-carousel-next]');
    const prevButton = carousel.querySelector('[data-carousel-prev]');
    const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('hidden', i !== index);
            indicators[i].setAttribute('aria-current', i === index);
        });
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            showItem(currentIndex);
        });
    });

    showItem(currentIndex);
});


function Menu(e) {
    let list = document.querySelector("ul");
    e.name === "menu" ? (e.name = "close", list.classList.add("top-[80px]"), list.classList.add("opacity-100")) :
        (e.name = "menu", list.classList.remove("top-[80px]"), list.classList.remove("opacity-100"))
}