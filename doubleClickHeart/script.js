"use strict";
const times = document.getElementById("times");

const container = document.getElementById("imgContainer");

let count = 0;

container.addEventListener("dblclick", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const boxX = container.offsetLeft;
  const boxY = container.offsetTop;

  const heartX = x - boxX;
  const heartY = y - boxY;

  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.classList.add("heart");
  heart.style.top = `${heartY}px`;
  heart.style.left = `${heartX}px`;

  container.appendChild(heart);

  setTimeout(() => heart.remove(), 500);
  times.innerHTML = ++count;
});
