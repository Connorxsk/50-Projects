"use strict";

const textarea = document.getElementById("text");
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
const btnClear = document.getElementById("clear");
const btnSpeed = document.getElementById("speed");

let index = 1;
let text = "";
let timeoutId;
let isRunning = false;
let speed = 300 / btnSpeed.value;

btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
btnClear.addEventListener("click", clear);
btnSpeed.addEventListener("input", (e) => (speed = 300 / e.target.value));

function runAutoText() {
  textarea.value = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 1;
  }

  timeoutId = setTimeout(runAutoText, speed);
}

function start() {
  if (isRunning) return;
  if (textarea.value === "") return;
  isRunning = true;

  if (text === "") {
    text = textarea.value;
  }

  runAutoText();
}

function stop() {
  clearTimeout(timeoutId);
  isRunning = false;
}

function clear() {
  stop();

  textarea.value = "";
  btnSpeed.value = 1;
  speed = 300 / btnSpeed.value;
  text = "";
  index = 1;
}
