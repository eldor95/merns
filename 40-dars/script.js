"use strict";

const btn = document.querySelector("button");

btn.addEventListener("click", function (e) {
  console.log(this);
  this.style.background = "crimson";
});
