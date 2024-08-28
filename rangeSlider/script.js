"use strict";

const slider = document.getElementById("range");
const label = document.querySelector("label");

const max = slider.max;
const min = slider.min;
const rangeWidth = parseFloat(
  getComputedStyle(slider).getPropertyValue("width")
);
const thumbWidth = parseFloat(
  getComputedStyle(slider).getPropertyValue("--thumb-width")
);
let x = parseFloat(getComputedStyle(label).getPropertyValue("translate"));

slider.addEventListener("input", (e) => {
  const value = +e.target.value;

  const skewing = value * ((rangeWidth - thumbWidth) / (max - min));

  label.style.translate = `${x + skewing}px`;

  label.innerHTML = value;
});
