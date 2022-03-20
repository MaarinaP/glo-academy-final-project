"use strict";

import { animate } from "./helpers";

const modal = () => {
    const body = document.querySelector("body");
    const overlay = document.querySelector(".overlay");
    const callModal = document.querySelector(".header-modal");
    const serviceModal = document.querySelector(".services-modal");

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
    });
};

export default modal;
