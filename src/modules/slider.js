"use strict";

const slider = () => {
    const body = document.querySelector("body");
    const benefitBlock = document.querySelectorAll(".benefits__item");
    const serviceBlock = document.querySelectorAll(".service-block");

    //numberLarge - how many elements to show on the screen for large screen with screenWidthLarge width and higher
    //numberSmall - how many elements to show on the screen for screen width lower then screenWidthLarge
    const visibleSlider = (domElement, numberLarge, numberSmall, screenWidthLarge = 576) => {
        domElement.forEach((item) => {
            item.style.display = "none";
        });

        if (screen.width >= screenWidthLarge) {
            for (let i = 0; i < numberLarge; i++) {
                domElement[i].style.display = "block";
            }
        } else {
            for (let i = 0; i < numberSmall; i++) {
                domElement[i].style.display = "block";
            }
        }
    };

    visibleSlider(benefitBlock, 3, 2);
    visibleSlider(serviceBlock, 2, 1);

    const moveRight = (domElement) => {
        //array of elements that are visible on the screen
        let active = [...domElement].filter((n) => n.style.display === "block");
        let visibleIndex = [...domElement].findIndex((n) => n.style.display === "block");
        let nextIndex = visibleIndex + active.length;

        if (nextIndex < domElement.length) {
            active[0].style.display = "none";
            domElement[nextIndex].style.display = "block";
        } else {
            return;
        }
    };

    const moveLeft = (domElement) => {
        domElement = [...domElement].reverse();
        moveRight(domElement);
    };

    body.addEventListener("click", (e) => {
        if (e.target.closest(".benefits__arrow")) {
            if (e.target.closest(".benefits__arrow--right")) {
                moveRight(benefitBlock);
            } else {
                moveLeft(benefitBlock);
            }
        }

        if (e.target.closest(".services__arrow")) {
            if (e.target.closest(".services__arrow--right")) {
                moveRight(serviceBlock);
            } else {
                moveLeft(serviceBlock);
            }
        }
    });
};

export default slider;
