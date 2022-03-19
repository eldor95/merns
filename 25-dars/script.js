"use strict";

// const greeting = document.getElementById("greeting"),
//   paragraph = document.getElementsByTagName("p"),
//   wrapper = document.getElementsByClassName("wrapper");
// greeting.style.cssText = "margin:10px; font-size:16px";

// greeting.style.color = "blue";
// greeting.style.background = "yellow";
// greeting.style.display = "inline-block";

// greeting.classList.remove("cssH1"); // class berish

// console.log(greeting);
// console.log(paragraph);
// console.log(wrapper);

const wrapper = document.querySelector(".wrapper"),
  btns = document.querySelectorAll("button");

for (let i = 0; i < btns.length; i++) {
  btns[i].style.padding = "10px";
}

btns.forEach((btn) => {
  btn.style.background = "crimson";
  btn.style.border = "none";
});

// btns[0].style.background = "crimson";
// btns[2].style.background = "crimson";

// console.log(wrapper);
console.log(btns);
