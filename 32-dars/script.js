"use strict";

const btns = document.querySelectorAll("button");

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0)); // 0- indexdagi classini nomini beradi
// console.log(btns[0].classList.add("blue")); // class qushadi
// console.log(btns[0].classList.remove("a")); //  0 - buttonni a classini uchiradi
// console.log(btns[0].classList.toggle("a")); //  0 - buttonni a classini uchiradi

btns[0].addEventListener("click", () => {
  if (!btns[1].classList.contains("blue")) {
    btns[1].classList.add("blue");
  } else {
    btns[1].classList.remove("blue");
  }
});
btns[1].addEventListener("click", () => {
  // if (!btns[0].classList.contains("blue")) {
  //   btns[0].classList.add("blue");
  // } else {
  //   btns[0].classList.remove("blue");
  // }

  btns[0].classList.toggle("blue");
});
