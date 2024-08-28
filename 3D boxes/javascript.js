"use strict";

function createBox(container) {
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 80}px ${-i * 80}px`;
      container.appendChild(box);
    }
  }
}

function createMultiContainers(copyCount) {
  const body = document.body;
  for (let i = 0; i < copyCount; i++) {
    const container = document.createElement("div");
    container.classList.add("container");
    createBox(container);
    body.appendChild(container);
  }
}

createMultiContainers(3);

const containers = document.querySelectorAll(".container");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  containers.forEach((container) => {
    container.classList.toggle("magic");
    container.querySelectorAll(".box").forEach((box) => {
      box.classList.toggle("shrink");
      const scale = box.classList.contains("shrink") ? 0.75 : 4 / 3;
      const [x, y] = box.style.backgroundPosition
        .split(" ")
        .map((pos) => parseInt(pos));
      box.style.backgroundPosition = `${x * scale}px ${y * scale}px`;
    });
  });
});
