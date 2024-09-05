"use strict";
const filled = document.querySelector(".filled");
const empties = document.querySelectorAll(".emptyBox");
filled === null || filled === void 0 ? void 0 : filled.addEventListener("dragstart", dragStart);
filled === null || filled === void 0 ? void 0 : filled.addEventListener("dragend", dragEnd);
empties.forEach((box) => {
    box.addEventListener("dragleave", dragLeave);
    box.addEventListener("dragenter", dragEnter);
    box.addEventListener("dragover", dragOver);
    box.addEventListener("drop", dragDrop);
});
function dragStart() {
    this.classList.add("hold");
    setTimeout(() => this.classList.add("hide"), 0);
}
function dragEnd() {
    this.classList.remove("hold");
    this.classList.remove("hide");
}
function dragLeave(e) {
    e.preventDefault();
    this.classList.remove("hover");
}
function dragEnter(e) {
    e.preventDefault();
    this.classList.add("hover");
}
function dragOver(e) {
    e.preventDefault();
}
function dragDrop(e) {
    e.preventDefault();
    this.classList.remove("hover");
    if (filled !== null) {
        filled.classList.remove("hide");
        this.append(filled);
    }
}
