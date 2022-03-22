"use strict";

const smoothScroll = () => {
    const body = document.querySelector("body");
    const services = document.getElementById("services");
    const scroll = document.querySelector(".smooth-scroll");

    scroll.style.display = "none";

    document.addEventListener("scroll", () => {
        let firstPage = services.getBoundingClientRect();
        if (firstPage.top > 542) {
            scroll.style.display = "none";
        } else {
            scroll.style.display = "block";
        }
    });

    scroll.addEventListener("click", () => {
        body.scrollIntoView({
            behavior: "smooth",
        });
    });
};

export default smoothScroll;
