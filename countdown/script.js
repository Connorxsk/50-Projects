"use strict";

const nums = document.querySelectorAll(".nums span");

const counter = document.querySelector(".counter");

const final = document.querySelector(".final");

const replay = document.querySelector("#replay");

function runAnimation() {
  nums.forEach((num, index) => {
    const lastNum = nums.length - 1;

    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && index !== lastNum) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        final.classList.add("show");
      }
    });
  });
}

runAnimation();

function resetDOM() {
  final.classList.remove("show");
  counter.classList.remove("hide");
  nums.forEach((num) => (num.classList.value = ""));

  nums[0].classList.add("in");
}

replay.addEventListener("click", () => {
  resetDOM();
  runAnimation();
});
