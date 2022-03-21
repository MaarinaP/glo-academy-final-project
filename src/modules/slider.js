"use strict";

const slider = () => {
    const body = document.querySelector("body");
    const benefitBlock = document.querySelectorAll("div.benefits__item");
    const benefitArrows = document.querySelectorAll(".benefits__arrow");

    const benefitArr = [];
    let visible = [];

    benefitBlock.forEach((item) => {
        item.style.display = "none";
        benefitArr.push(item);
    });

    if (screen.width >= 576) {
        visible = benefitArr.slice(0, 3);
    } else {
        visible = benefitArr.slice(0, 2);
    }

    visible.forEach((item) => {
        item.style.display = "block";
    });

    body.addEventListener("click", (e) => {
        if (e.target.closest(".benefits__arrow")) {
            if (e.target.closest(".benefits__arrow--right")) {
                console.log("right");
            } else {
                console.log("left");
            }
        }
    });
};

export default slider;
