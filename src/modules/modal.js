"use strict";

import { animate } from "./helpers";

const modal = () => {
    const body = document.querySelector("body");
    const overlay = document.querySelector(".overlay");
    const callModal = document.querySelector(".header-modal");
    const serviceModal = document.querySelector(".services-modal");
    const originImage = document.querySelectorAll(".sertificate-document");
    const modal = document.querySelectorAll(".document-overlay");
    const img = document.querySelectorAll("a .img-responsive");

    modal.forEach((overlay) => {
        const close = document.createElement("span");
        const modalImg = document.createElement("img");

        close.className = "close header-modal__close";
        close.innerHTML = "X";
        close.style.top = "30px";
        close.style.right = "40px";
        close.style.color = "black";
        modalImg.className = "modal-image";
        modalImg.style.width = "95%";
        overlay.append(close);
        overlay.append(modalImg);
        overlay.style.display = "none";
    });

    const modalImage = document.querySelectorAll(".modal-image");

    img.forEach((img, index) => {
        img.addEventListener("click", (e) => {
            e.preventDefault();
            modal[index].style.display = "block";
            modal[index].classList.add("header-modal--opened");
            modal[index].classList.remove("document-overlay");
            modalImage[index].src = originImage[index].href;
            overlay.style.display = "block";

            modalImage.forEach((img) => {
                img.addEventListener("click", (e) => {
                    e.preventDefault();
                });
            });
        });
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

        // if (e.target.closest(".sertificate-document")) {
        //     e.preventDefault();
        //     modal.forEach((overlay) => {
        //         if (e.target === overlay) {
        //             overlay.style.display = "block";
        //         }
        //     });
        //     console.log(e.target);
        //     console.log(modal);
        //     // modal.style.display = "block";
        //     // modalImage.src = this.src;
        // }

        if (e.target.closest(".modal-image")) {
            e.preventDefault();
        }

        if (e.target.closest(".close")) {
            e.preventDefault();
            overlay.style.display = "none";
            console.dir(e.target);
        }
    });
};

export default modal;
