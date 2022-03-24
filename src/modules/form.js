"use strict";

const form = () => {
    const body = document.querySelector("body");

    const sendData = (data) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => res.json);
    };

    const sendForm = (e) => {
        const formData = new FormData(e.target);
        const formBody = {};

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        const total = document.getElementById("calc-total");
        if (total) {
            formBody.calcTotal = total.value;
        } else {
            formBody.calcTotal = "";
        }

        if (formBody.fio && formBody.phone) {
            sendData(formBody);
        } else {
            alert("Пожалуйста, заполните все поля формы");
        }
    };

    body.addEventListener("submit", (e) => {
        if (e.target.closest(".order-form") || e.target.closest(".order-call-modal")) {
            e.preventDefault();
            sendForm(e);
        }
    });
};

export default form;
