"use strict";

const root = document.querySelector(".root");

function div(...classes) {
  const elem = document.querySelector("div");
  classes.forEach((classItem) => {
    elem.classList.add(classItem);
  });
  root.append(elem);
}
const a = document.createElement("div");
div("width", "height", "bg");

// react operator______________________________________________
// function mySkills(lang, cms, ...rest) {
//   console.log(lang, cms, rest);
//   rest.forEach((item, i) => {
//     console.log(`Extra skills: ${i + 1} : ${item}`);
//   });
// }

// // mySkills("JS", "Wordpress", "Python, PHP, Drupal");

// // default value

// function calc(a, b) {
//   b = b || 2;
//   console.log(a + b);
// }

// calc(1);
