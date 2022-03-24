"use strict";

const valid = () => {
    const body = document.querySelector("body");

    const validName = /[^a-zа-я]/gi;
    const validNumber = /[^\+0-9]/gi;

    body.addEventListener("input", (e) => {
        if (e.target.matches("input[name=fio]")) {
            e.target.value = e.target.value.replace(validName, "");
        }

        if (e.target.matches("input[name=phone]")) {
            e.target.value = e.target.value.replace(validNumber, "");
            if (e.target.value.length > 17) {
                e.target.value = e.target.value.substring(0, 17);
            }
        }
    });
};

export default valid;
