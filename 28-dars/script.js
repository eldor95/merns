// function hi() {
//   console.log("Hello world");  // 1-usul
// }

const btn = document.querySelector("#btn");
const a = document.querySelector(".a");
const link = document.querySelector("a");
const div = document.querySelector(".div");
const input = document.querySelector("form input");

input.addEventListener("input", (event) => {
  console.log(event.target.value);
});

const call = (e) => {
  // console.log(e.currentTarget);
  // console.log(e.taget);
};

btn.addEventListener("click", call);
div.addEventListener("click", call);

// btn.onclick = function () {
//   console.log("Hello world");    //2- usul
// };

// btn.onclick = function () {
//   console.log("2");
// };

// 3-USUL__________________
// btn.addEventListener("mouseover", () => {
//   console.log("Hello world");
// });

// btn.addEventListener("mouseover", () => {
//   console.log(2);
// });

let index = 0;
const callFunc = () => {
  // console.log("Hello World");
  index++;
  // console.log(index);
  if (index == 2) {
    btn.removeEventListener("click", callFunc);
  }
};

// btn.addEventListener("mouseover", callFunc);

btn.addEventListener("click", callFunc);

a.addEventListener("click", (event) => {
  // console.log(event);
});

link.addEventListener("click", (event) => {
  event.preventDefault();
  alert("Hi");
  // console.log(event.target);
});
