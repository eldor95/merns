"use strict";
// FUNCTION darsi haqida

let number = 8; // GLOBAL uzgaruvchi

function getText(text) {
  console.log(text);
  let numbers = 10; // Ichki uzgaruvchi
  console.log(numbers);
}

getText("Hello world");
console.log(number); // bu holatda qanaqa natija chiqadi.

function calc(a, b) {
  return a + b;
}

console.log(calc(5, 10));
console.log(calc(2, 40));
console.log(calc(1, 20));
console.log(calc(56, 20));

// Function decloration
returnNumber();

function returnNumber() {
  let number = 8;
  return number;
}

//  2ta funksiyaning farqi declorationda har yerda ishlaydi (expression da ishlamaydi)

// Function expression
const funcExpr = function () {
  console.log(10);
};
funcExpr();

// array function
const arrayFunction = (c, d) => c + d;
const plus = arrayFunction(4, 7);
console.log(plus);
