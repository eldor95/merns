"use strict";

const btn = document.querySelector(".crimson");

function btnAnimation() {
  const box = document.querySelector(".box");
  let pos = 0;
  const id = setInterval(animationFrame, 10);

  function animationFrame() {
    if (pos === 245) {
      clearInterval(id);
    } else {
      pos++;
      box.style.left = pos + "px";
    }
  }
}

btn.addEventListener("click", btnAnimation);

// btn.addEventListener("click", () => {
//   const tim = setTimeout(logger, 2000);
// });

// const timer = setTimeout(
//   function (text) {
//     console.log(text);
//   },
//   2000,
//   "Hello world"
// );
// function logger() {
//   console.log("Hello world");
// }

// const timer = setTimeout(logger, 2000);

// clearInterval(timer);

// let timerID,
//   i = 0;

// btn.addEventListener("click", () => {
//   timerID = setInterval(function () {
//     if (i >= 3) {
//       clearInterval(timerID);
//       i = 0;
//     }
//     i++;
//     console.log("Hello world");

//     console.log(i);
//   }, 2000);
// });

// let id = setTimeout(function log() {
//   console.log("Hi");
//   id = setTimeout(log, 1000);
// }, 1000);          // 1 sekundda funksiya ishlaydi
