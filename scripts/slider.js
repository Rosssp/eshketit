document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".howToPlay__slider_wrapper");
    const sliderDotsContainer = document.querySelector(
        ".howToPlay__slider_dots"
    );

    const sliderItems = document.querySelectorAll(".howToPlay__slider_item");
    const totalSlides = sliderItems.length;
    let currentSlide = 0;

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("div");
        dot.classList.add("howToPlay__slider_dot");
        if (i === 0) {
            dot.classList.add("active");
        }
        sliderDotsContainer.appendChild(dot);
    }

    const sliderDots = document.querySelectorAll(".howToPlay__slider_dot");

    sliderDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            goToSlide(index);
        });
    });

    const arrowLeft = document.querySelector(".howToPlay__slider_arrow_left");
    const arrowRight = document.querySelector(".howToPlay__slider_arrow_right");

    arrowLeft.addEventListener("click", () => {
        if (currentSlide > 0) {
            goToSlide(currentSlide - 1);
        }
    });

    arrowRight.addEventListener("click", () => {
        if (currentSlide < totalSlides - 1) {
            goToSlide(currentSlide + 1);
        }
    });

    function goToSlide(slideIndex) {
        sliderDots[currentSlide].classList.remove("active");
        sliderItems[currentSlide].classList.remove("slider_item_active");

        sliderDots[slideIndex].classList.add("active");
        sliderItems[slideIndex].classList.add("slider_item_active");

        // sliderWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;

        currentSlide = slideIndex;

        updateArrowClasses();
    }

    function updateArrowClasses() {
        arrowLeft.classList.toggle("active", currentSlide !== 0);
        arrowRight.classList.toggle("active", currentSlide !== totalSlides - 1);
    }
});
