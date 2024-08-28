"use strict";

const btn = document.querySelectorAll(".btn");

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target =
      e.target.tagName === "SPAN" ? e.target.parentElement : e.target;

    const x = e.pageX;
    const y = e.pageY;
    const btnTop = target.offsetTop;
    const btnLeft = target.offsetLeft;
    const rippleTop = y - btnTop;
    const rippleLeft = x - btnLeft;

    function addRipple(btnNum, rippleNum) {
      btnNum = document.createElement("span");
      btnNum.classList.add(`${rippleNum}`);
      btnNum.style.top = rippleTop + "px";
      btnNum.style.left = rippleLeft + "px";
      btn.appendChild(btnNum);
      setTimeout(() => btnNum.remove(), 500);
    }

    if (btn.className === "btn one") {
      addRipple("one", "rippleOne");
    }

    if (btn.className === "btn two") {
      addRipple("two", "rippleTwo");
    }

    if (btn.className === "btn three") {
      addRipple("three", "rippleThree");
    }
  });
});
