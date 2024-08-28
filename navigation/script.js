"use strict";

const toggle = document.getElementById("navToggle");

const navBar = document.getElementById("nav");

toggle.addEventListener("click", () => navBar.classList.toggle("active"));
