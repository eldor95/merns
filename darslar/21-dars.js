"use strict";
// let a = 8,
//   b = a;

// console.log(b + 5);
// console.log(b);

// const bmw = {
//   color: "black",
//   isBuy: false,
// };

// const mers = bmw;
// mers.color = "white"; // bu yerda ma'lumot 2 obyektda ham uzgaradi

// console.log("bmw", bmw);
// console.log("mers", mers);

// function copyObj(obj) {
//   let objCopy = {};
//   for (let key in obj) {
//     objCopy[key] = obj[key];
//   }
//   return objCopy;
// }

// const nexiaR3 = {
//   type: 3,
//   color: "black",
//   isBuy: false,
//   shum: {
//     a: 100,
//     b: 300,
//   },
// };

// const spark = copyObj(nexiaR3);

// spark.shum.a = 300;
// spark.color = "white";
// spark.type = 2;

// console.log("nexiaR3: ", nexiaR3);
// console.log("spark: ", spark);

// const nexia2 = {
//   type: 3,
//   color: "black",
//   isBuy: true,
// };

// const newCar = Object.assign({}, nexia2);
// newCar.isBuy = false;

// console.log(nexia2);
// console.log(newCar);

// const extra = {
//   shum: 100,
// };

// const cars = Object.assign(nexia2, extra);

// console.log(cars);

// const arr = [1, 2, 3, 4];
// const newArr = arr.slice(); // slice methodi copy qiladi

// newArr[1] = 22;

// newArr.push(8);
// newArr.pop();
// newArr.unshift(8);
// newArr.unshift(2);
// // newArr.shift();
// console.log(arr);
// console.log(newArr);

// const arrr = [3, 534, 6, 5, 65, 7];

// const aff = arrr.join("-");
// arrr.sort(ol);
// console.log(arrr);
// console.log(aff);

// function ol(a, b) {
//   return a - b;
// }

const cars = ["bmw", "mers", "wolksvagen"],
  plane = ["german", "Uzbekairway", "turkish"],
  technology = [...cars, ...plane];

// console.log(technology);

function number(a, b, ...c) {
  console.log(a, b, c);
}

number(1, 2, 3, 4, 5, 6);

function func(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const numbers = [1, 23, 4, 5];

func(...numbers);
