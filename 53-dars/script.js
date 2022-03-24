"use strict";

const car = {
  name: "Merc",
  color: "black",
};

const a = JSON.stringify(car);
const star = JSON.parse(a);

console.log(a);
console.log(star);
