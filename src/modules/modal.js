"use strict";

import { animate } from "./helpers";

const modal = () => {
    const body = document.querySelector("body");
    const overlay = document.querySelector(".overlay");
    const callModal = document.querySelector(".header-modal");
    const serviceModal = document.querySelector(".services-modal");
    const imageOverlay = document.querySelectorAll(".document-overlay");
    const imageBlock = document.querySelectorAll(".text-center a");
    const image = document.querySelectorAll("a .img-responsive");
    const divImageBlock = document.querySelectorAll(".text-center div.col-sm-4");
    console.log(divImageBlock);

    imageOverlay.forEach((overlay) => {
        overlay.style.display = "none";
    });

    body.addEventListener("click", (e) => {
        if (e.target.closest(".button .btn")) {
            e.preventDefault();
            overlay.style.display = "block";
            callModal.style.display = "block";
            animate({
                duration: 400,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    callModal.style.top = 0 + "%";
                    callModal.style.top = progress * 50 + "%";
                },
            });
        }

        if (e.target.closest(".service-button .btn")) {
            e.preventDefault();
            overlay.style.display = "block";
            serviceModal.style.display = "block";
            animate({
                duration: 400,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    serviceModal.style.top = 0 + "%";
                    serviceModal.style.top = progress * 50 + "%";
                },
            });
        }

        if (e.target.matches("span[title ~= Close]")) {
            overlay.style.display = "none";
            serviceModal.style.display = "none";
            callModal.style.display = "none";
        }

        if (e.target.closest(".text-center a")) {
            e.preventDefault();
            image.forEach((doc, index) => {
                if (doc === e.target) {
                    // overlay.style.display = "block";
                    // doc.src = doc.parentElement.href;
                    divImageBlock[index].classList.remove("col-sm-4");
                    divImageBlock[index].classList.add("service-modal--opened");
                    // divImageBlock[index].classList.add("service-modal");
                    // // divImageBlock[index].style.zIndex = 0;
                    // // divImageBlock[index].style.position = "fixed";
                    // doc.style.margin = "auto";
                    divImageBlock[index].style.display = "block";
                    doc.src = doc.parentElement.href;
                    divImageBlock[index].style.position = "static";

                    // // doc.classList.add("service-modal--opened");
                    // doc.style.width = 70 + "%";
                    // doc.style.maxWidth = 700 + "px";
                    console.dir(doc);
                }
            });
        }
    });
};

export default modal;
