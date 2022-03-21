"use strict";

const box = document.querySelector(".box"),
  btn = document.querySelector("button");

// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

// const width = box.scrollWidth;
// const height = box.scrollHeight;

// console.log(width, height);

// console.log(box.getBoundingClientRect().top);

btn.addEventListener("click", () => {
  // box.style.height = box.scrollHeight + "px";
  console.log(box.scrollTop);

  if (box.scrollTop > 30 && box.scrollTop < 300) {
    console.log("Siz uqishni boshladiz");
  } else if (box.scrollTop > 2100) {
    console.log("Siz textni tugattiz");
  }
});
