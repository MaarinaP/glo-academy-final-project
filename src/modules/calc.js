"use strict";

const calc = () => {
    const balkony = document.querySelector(".balkony");
    const calc = balkony.querySelector("#calc");

    calc.addEventListener("change", (e) => {
        const typeValue = balkony.querySelector("#calc-type").value;
        const materialValue = balkony.querySelector("#calc-type-material").value;
        const squareValue = balkony.querySelector("#calc-input").value;
        const total = balkony.querySelector("#calc-total");

        if (typeValue && materialValue && squareValue) {
            total.value = typeValue * materialValue * squareValue;
        }
    });
};

export default calc;
