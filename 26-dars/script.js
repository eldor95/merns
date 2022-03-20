"use strict";

const parentDiv = document.querySelector(".parent"),
  circle = document.querySelectorAll(".circle");

const div = document.createElement("div");
div.classList.add("circle");
div.style.background = "black";

// parentDiv.append(div); // parentDivni oxiriga qushib quyadi
// circle[0].prepend(div); // parentDivni boshiga qushib quyadi
// circle[0].before(div);
// circle[0].after(div);

// circle[1].remove();
console.log(div);
