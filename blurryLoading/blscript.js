"use strict";

const background = document.querySelector(".background");
const loading = document.querySelector(".loading");

let num = 0;
let intervalId = setInterval(setLoading, 20);

function setLoading() {
  num++;

  if (num > 99) {
    clearInterval(intervalId);
  }

  loading.innerText = `${num}%`;
  loading.style.opacity = 1 - num / 100;
  background.style.filter = `blur(${50 - num / 2}px)`;
}
