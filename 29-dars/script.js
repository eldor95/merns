"use strict";

const wrapper = document.querySelector(".wrapper");
const btn = wrapper.querySelector("[data-currentBtn='1']");
const a = document.querySelector(".a");
// btn.addEventListener(
//   "click",
//   () => {
//     console.log("add");
//   },
//   { once: true }   // Once true bir marta ishlaydi degan mano beradi
// );
// console.log(document.documentElement);

// console.log(document.childNodes);
// console.log(document.body.childNodes);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// console.log(a.parentNode);
// console.log(a.parentElement);

// console.log(btn.nextElementSibling);

// for (let i of document.body.childNodes) {
//   if (i.nodeName == "#text") {
//     continue;
//   }
//   console.log(i);
// }

const btns = document.querySelectorAll("button");
// console.log(btns);
btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    console.log("Hi " + index);
  });
});
// console.log(btn.nextSibling);
