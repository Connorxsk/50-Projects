"use strict";

const leftSlider = document.querySelector(".leftSlider");
const rightSlider = document.querySelector(".rightSlider");
const btnUp = document.querySelector(".btnUp");
const btnDown = document.querySelector(".btnDown");
const count = leftSlider.querySelectorAll(".leftSlide").length;

let activeSlide = 0;

rightSlider.style.top = `-${(count - 1) * 100}vh`;

btnUp.addEventListener("click", () => changeSlide("up"));
btnDown.addEventListener("click", () => changeSlide("down"));

function changeSlide(direction) {
  if (direction === "up") {
    activeSlide++;
    if (activeSlide > count - 1) {
      activeSlide = 0;
    }
  }

  if (direction === "down") {
    activeSlide--;
    if (activeSlide < 0) {
      activeSlide = count - 1;
    }
  }

  leftSlider.style.top = `-${activeSlide * 100}vh`;
  rightSlider.style.top = `-${(count - 1 - activeSlide) * 100}vh`;
}
