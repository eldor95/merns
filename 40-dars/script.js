"use strict";

const btn = document.querySelector("button");

btn.addEventListener("click", function (e) {
  console.log(this);
  this.style.background = "crimson";
});

btn.addEventListener("click", (e) => {
  e.target.style.background = "crimson";
});

// const obj = {
//   number: 8,
//   sayNumber: function () {
//     const say = () => {
//       console.log(this.number);
//     };
//     say();
//   },
// };

// obj.sayNumber();

const calc = (a) => a * 2;
console.log(calc(20));
