"use strict";

const timer = (deadline, bodyClass) => {
    const body = document.querySelector(bodyClass);
    if (!body) {
        return;
    }
    const days = body.querySelectorAll(".count_1 span");
    const hours = body.querySelectorAll(".count_2 span");
    const minutes = body.querySelectorAll(".count_3 span");
    const seconds = body.querySelectorAll(".count_4 span");

    const clock = () => {
        const today = new Date().getTime();
        const newDate = new Date(deadline).getTime();
        //time in seconds
        let diff = (newDate - today) / 1000;

        //seconds without minutes
        let diffS = Math.floor(diff % 60);
        let diffM = Math.floor((diff / 60) % 60);
        let diffH = Math.floor((diff / 60 / 60) % 24);
        let diffD = Math.floor(diff / 60 / 60 / 24);

        insertTime(days, diffD);
        insertTime(hours, diffH);
        insertTime(minutes, diffM);
        insertTime(seconds, diffS);

        let tick = setTimeout(clock, 1000);
        if (diff < 0) {
            clearTimeout(tick);
            insertTime(days, "0");
            insertTime(hours, "0");
            insertTime(minutes, "0");
            insertTime(seconds, "0");
        }
    };

    const insertTime = (domElement, value) => {
        domElement.forEach((element) => {
            element.textContent = addZero(value);
        });
    };

    const addZero = (i) => {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    };

    clock();
};

export default timer;
