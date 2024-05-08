document.addEventListener("DOMContentLoaded", function () {
    const screensFirst = document.querySelector(".screens__fist");
    const screensSecond = document.querySelector(".screens__second");
    var container = document.querySelector(".screens");

    window.addEventListener("scroll", function () {
        let width = window.innerWidth;
        const containerRect = container.getBoundingClientRect();
        const screensFirstRect = screensFirst.getBoundingClientRect();
        const screensSecondRect = screensSecond.getBoundingClientRect();

        if (width <= 768) {
            screensFirst.style.transform = `translateX(${
                screensFirstRect.y * 0.2
            }px)`;

            screensSecond.style.transform = `translateX(${
                -screensSecondRect.y * 0.2
            }px)`;
        } else {
            screensFirst.style.transform = `translateX(${
                screensFirstRect.y * 0.3
            }px)`;

            screensSecond.style.transform = `translateX(${
                -screensSecondRect.y * 0.3
            }px)`;
        }
    });
});
