"use strict";

const slider = () => {
    const body = document.querySelector("body");
    const benefitBlock = document.querySelectorAll(".benefits__item");
    const services = document.getElementById("services");
    const serviceBlock = services.querySelectorAll(".col-md-12");
    //numberLarge - how many elements to show on the screen for large screen with screenWidthLarge width and higher
    //numberSmall - how many elements to show on the screen for screen width lower then screenWidthLarge
    const visibleSlider = (domElement, numberLarge, numberSmall, screenWidthLarge = 576) => {
        domElement.forEach((item, index) => {
            item.style.display = "none";
            item.classList.add(index);
        });

        if (screen.width >= screenWidthLarge) {
            for (let i = 0; i < numberLarge; i++) {
                domElement[i].style.display = "block";
            }
        } else {
            for (let i = 0; i < numberSmall; i++) {
                domElement[i].style.display = "block";

                //correct an element to the middle of the screen
                domElement.forEach((item) => {
                    item.style.width = "auto";
                    item.style.margin = "auto";
                });
            }
        }
    };

    visibleSlider(serviceBlock, 2, 1);
    visibleSlider(benefitBlock, 3, 1);

    const moveLeft = (domElement, elClass) => {
        domElement = document.querySelectorAll(elClass);
        // array of elements that are visible on the screen
        let active = [...domElement].filter((n) => n.style.display === "block");
        let visibleIndex = [...domElement].findIndex((n) => n.style.display === "block");
        let nextIndex = visibleIndex + active.length;
        let firstElement = domElement[0];
        let lastElement = domElement[domElement.length - 1];

        firstElement.style.display = "none";
        lastElement.insertAdjacentElement("afterend", firstElement);
        domElement[nextIndex].style.display = "block";
    };

    const moveRight = (domElement, elClass) => {
        domElement = document.querySelectorAll(elClass);
        let active = [...domElement].filter((n) => n.style.display === "block");
        let visibleIndex = [...domElement].findIndex((n) => n.style.display === "block");

        let nextIndex = visibleIndex + (active.length - 1);
        let firstElement = domElement[0];
        let lastElement = domElement[domElement.length - 1];

        domElement[nextIndex].style.display = "none";
        firstElement.insertAdjacentElement("beforebegin", lastElement);
        lastElement.style.display = "block";
    };

    body.addEventListener("click", (e) => {
        if (e.target.closest(".benefits__arrow")) {
            if (e.target.closest(".benefits__arrow--right")) {
                moveRight(benefitBlock, ".benefits__item");
            } else {
                moveLeft(benefitBlock, ".benefits__item");
            }
        }

        if (e.target.closest(".services__arrow")) {
            if (e.target.closest(".services__arrow--right")) {
                moveRight(serviceBlock, ".col-md-12");
            } else {
                moveLeft(serviceBlock, ".col-md-12");
            }
        }
    });
};

export default slider;
