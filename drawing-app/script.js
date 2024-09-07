const canvas = document.getElementById("canvas");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const size = document.getElementById("size");
const color = document.getElementById("color");
const clear = document.getElementById("clear");

const ctx = canvas.getContext("2d");

let sizeValue = 3;
let colorValue = color.value;
let isPressed = false;
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;

  drawCircle(x, y);
});

document.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, sizeValue, 0, Math.PI * 2);
  ctx.fillStyle = colorValue;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = colorValue;
  ctx.lineWidth = sizeValue * 2;
  ctx.stroke();
}

decrease.addEventListener("click", () => {
  sizeValue -= 3;
  if (sizeValue < 3) {
    sizeValue = 3;
  }
  size.innerHTML = sizeValue;
});

increase.addEventListener("click", () => {
  sizeValue += 3;
  if (sizeValue > 30) {
    sizeValue = 30;
  }
  size.innerHTML = sizeValue;
});

color.addEventListener("change", (e) => {
  colorValue = e.target.value;
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
