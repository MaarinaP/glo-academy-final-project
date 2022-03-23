"use strict";

const calc = () => {
    const balkony = document.querySelector(".balkony");
    if (!balkony) {
        return;
    }
    const calc = balkony.querySelector("#calc");

    const validNumber = /[^0-9]+/i;

    calc.addEventListener("input", (e) => {
        if (e.target.matches("#calc-input")) {
            e.target.value = e.target.value.replace(validNumber, "");
        }
    });

    calc.addEventListener("change", (e) => {
        const typeValue = balkony.querySelector("#calc-type").value;
        const materialValue = balkony.querySelector("#calc-type-material").value;
        const squareValue = balkony.querySelector("#calc-input").value;
        const total = balkony.querySelector("#calc-total");

        if (typeValue && materialValue && squareValue) {
            total.value = Math.floor(typeValue * materialValue * squareValue);
        }
    });
};

export default calc;
