"use strict";

console.log("hello world");
alert("Hello world");

const useValue = confirm("siz 18 yoshdamisz?");

console.log(useValue);

const ism = prompt("Ismiz nma ?", "");
console.log(ism);

const answers = [];

answers[0] = prompt("Ismiz nima ?");
answers[1] = prompt("Familyangiz nima ?");
answers[2] = prompt("yoshiz nima? ");

document.write(answers);

console.log(answers);

const firstName = prompt("Isming nima?"); // Eldor degan  qiymat kiritsam
console.log(typeof firstName); // bu yerda ma'lumot STRING qiymat bulib chiqadi

const FrstName = +prompt("Ochistvang nima?"); // Bu holatda esa number kiritsak number qaytaradi.
console.log(FrstName + 10);
