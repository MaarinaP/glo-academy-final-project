"use strict";

const slider = () => {
    const body = document.querySelector("body");
    const benefitBlock = document.querySelectorAll(".benefits__item");
    const benefitArrows = document.querySelectorAll(".benefits__arrow");
    const serviceBlock = document.querySelectorAll(".service-block");

    //create arrays for visible and hidden elements
    //numberLarge - how many elements to show on the screen for large screen with screenWidthLarge width and higher
    const visibleSlider = (domElement, numberLarge, numberSmall, screenWidthLarge = 576) => {
        const array = [];
        let visibleArr = [];
        let hiddenArr = [];

        domElement.forEach((item) => {
            item.style.display = "none";
            array.push(item);
        });

        if (screen.width >= screenWidthLarge) {
            visibleArr = array.slice(0, numberLarge);
            hiddenArr = array.slice(numberLarge);
        } else {
            visibleArr = array.slice(0, numberSmall);
            hiddenArr = array.slice(numberSmall);
        }

        visibleArr.forEach((item) => {
            item.style.display = "block";
        });

        return [visibleArr, hiddenArr];
    };

    visibleSlider(benefitBlock, 3, 2);
    visibleSlider(serviceBlock, 2, 1);

    let visibleArr = visibleSlider(benefitBlock, 3, 2)[0];
    let hiddenArr = visibleSlider(benefitBlock, 3, 2)[1];

    //function for slider move click left
    const leftMove = () => {
        let itemOff = visibleArr.shift();
        itemOff.style.display = "none";
        hiddenArr.push(itemOff);
        itemOff = hiddenArr.shift();
        itemOff.style.display = "block";
        visibleArr.push(itemOff);

        return [visibleArr, hiddenArr];
    };

    //function for slider move click right
    const rightMove = () => {
        let itemOff = visibleArr.pop();
        itemOff.style.display = "none";
        hiddenArr.unshift(itemOff);
        itemOff = hiddenArr.pop();
        itemOff.style.display = "block";
        visibleArr.unshift(itemOff);

        return [visibleArr, hiddenArr];
    };

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
