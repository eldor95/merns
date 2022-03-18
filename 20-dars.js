"use strict";

// const arr = [1, 2, 3, 4];

// //massiv oxirgi elementini  olib tashash
// //arr.pop();

// //massivga qushish
// // arr.push(5);
// // console.log(arr);

// arr.unshift(0);
// console.log(arr);
// // ---------------------------

// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// const colors = ["red", "black", "crimson"];

// colors.forEach(function (item, index, arr) {
//   console.log(item, index, arr);
// });

// ===============================

const questions = prompt("", "");

const answers = questions.split(" "); // satrlarni orasidagi " " qarab arrayga ajratib oladi

console.log(answers);

console.log(answers.join(" ")); ///  Arrayni elementlarigi " " berib satr holatiga keltiradi

const number = [2, 35, 7, 4, 86, 1];

number.sort(sortArr);

console.log(number);

function sortArr(a, b) {
  return a - b;
}
