const filled: HTMLElement | null = document.querySelector(".filled");
const empties: NodeListOf<HTMLElement> = document.querySelectorAll(".emptyBox");

filled?.addEventListener("dragstart", dragStart);
filled?.addEventListener("dragend", dragEnd);

empties.forEach((box) => {
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragover", dragOver);
  box.addEventListener("drop", dragDrop);
});

function dragStart(this: HTMLElement): void {
  this.classList.add("hold");
  setTimeout(() => this.classList.add("hide"), 0);
}

function dragEnd(this: HTMLElement): void {
  this.classList.remove("hold");
  this.classList.remove("hide");
}

function dragLeave(this: HTMLElement, e: DragEvent): void {
  e.preventDefault();
  this.classList.remove("hover");
}

function dragEnter(this: HTMLElement, e: DragEvent): void {
  e.preventDefault();
  this.classList.add("hover");
}

function dragOver(this: HTMLElement, e: DragEvent): void {
  e.preventDefault();
}

function dragDrop(this: HTMLElement, e: DragEvent): void {
  e.preventDefault();
  this.classList.remove("hover");
  if (filled !== null) {
    filled.classList.remove("hide");
    this.append(filled);
  }
}
