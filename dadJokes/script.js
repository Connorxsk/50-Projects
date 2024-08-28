"use strict";

const box = document.querySelector(".container");
const showJokes = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

let isMoving = true;
let movingId = setInterval(moving, 1500);

moving();

box.addEventListener("mouseenter", () => {
  isMoving = false;
  box.style.left = box.offsetLeft + "px";
  box.style.top = box.offsetTop + "px";
});

box.addEventListener("mouseleave", () => {
  isMoving = true;
});

function moving() {
  if (isMoving) {
    const maxX = window.innerWidth - box.clientWidth;
    const maxY = window.innerHeight - box.clientHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    box.style.transform = "translate(0,0)";

    box.style.left = randomX + "px";
    box.style.top = randomY + "px";
  }

  return;
}

jokeBtn.addEventListener("click", getJokes);

async function getJokes() {
  try {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const jokes = await res.json();

    showJokes.innerHTML = jokes.value;
  } catch (error) {
    showJokes.innerHTML = "Failed to load joke: " + error.message;
  }
}
