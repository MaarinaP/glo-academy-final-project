"use strict";

const valid = () => {
    const body = document.querySelector("body");
    const balkony = document.querySelector(".balkony");
    const squareValue = balkony.querySelector("#calc-input").value;

    const validNumber = /[^0-9]+/i;

    body.addEventListener("input", (e) => {
        if (e.target.matches("#calc-input")) {
            e.target.value = e.target.value.replace(validNumber, "");
        }
    });
};

export default valid;
