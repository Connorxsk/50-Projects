"use strict";

const header = document.querySelector(".header");
const title = document.getElementById("title");
const excerpt = document.querySelector(".excerpt");
const avatar = document.querySelector(".avatar");
const authorName = document.getElementById("name");
const jobTitle = document.getElementById("jobTitle");

const animated_bg = document.querySelectorAll(".animated-bg");
const line = document.querySelectorAll(".line");

setTimeout(getCard, 2000);

function getCard() {
  header.innerHTML =
    "<img src='https://cdn.pixabay.com/photo/2022/11/14/11/31/white-jackdaw-7591386_1280.jpg' alt='headerImage'/>";

  title.innerHTML = "White Raven represents holy and pure";

  excerpt.innerHTML =
    "White ravens are not albino, but a separate species from black ravens. This is known because they have bright black eyes. White ravens are larger and more intelligent than their black counterparts, and can be larger than hawks. Like black ravens, white ravens can croak words";

  avatar.innerHTML =
    "<img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWlreW85ZnkxbXBocnMyYzlqbXFtd2ZyMzdvZ29hN3dxajB5eTdjYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y5ceyhXIasYpCzdtgg/giphy.gif'/>";

  authorName.innerHTML = "Connor";

  jobTitle.innerHTML = "Developer,Game Science";

  animated_bg.forEach((bg) => bg.classList.remove("animated-bg"));
  line.forEach((line) => line.classList.remove("line"));
}
