"use strict";

// ________________________________DELEGATSIYA

const btns = document.querySelectorAll("button"),
  wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("click", (event) => {
  // if (event.target && event.target.classList.contains("crimson")) {
  //   console.log("Click");
  // }

  if (event.target && event.target.matches("button.crimson")) {
    console.log("Click");
  }
});

// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log("Click");
//   });
// });

const btn = document.createElement("button");
btn.classList.add("crimson");
wrapper.append(btn);
