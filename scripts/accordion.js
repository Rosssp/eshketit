document.addEventListener("DOMContentLoaded", function () {
    var faqItemTitles = document.querySelectorAll(".faq__item_title");
    faqItemTitles.forEach(function (title) {
        title.addEventListener("click", function () {
            var descr = this.nextElementSibling;
            var contentHeight = descr.scrollHeight + "px";

            if (descr.classList.contains("show")) {
                descr.style.maxHeight = "0";
            } else {
                descr.style.maxHeight = contentHeight;
            }

            descr.classList.toggle("show");
            this.querySelector(".faq__item_title_triangle").classList.toggle(
                "rotate"
            );
        });
    });
});
