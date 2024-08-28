"use strict";

const slider = document.querySelectorAll(".slider");
const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const body = document.body;

let activeSlider = 0;

setBodyBg();

btnLeft.addEventListener("click", leftSlider);
btnRight.addEventListener("click", rightSlider);

function setBodyBg() {
  body.style.backgroundImage = slider[activeSlider].style.backgroundImage;
}

function setActiveSlider() {
  slider.forEach((slider) => slider.classList.remove("active"));

  slider[activeSlider].classList.add("active");
}

function leftSlider() {
  activeSlider--;

  if (activeSlider < 0) {
    activeSlider = slider.length - 1;
  }

  setBodyBg();
  setActiveSlider();
}

function rightSlider() {
  activeSlider++;

  if (activeSlider > slider.length - 1) {
    activeSlider = 0;
  }

  setBodyBg();
  setActiveSlider();
}
