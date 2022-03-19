"use strict";

const person = {
  firstName: "Eldor",
  lastName: "Odilov",
  age: 26,
  wishes: [],
  friends: {
    name: "name",
  },
};
// console.log(person);

const obj = {
  name: "div",
  width: 400,
  height: 400,
  colors: {
    border: "crimson",
    bg: "red",
  },
};
// console.log(obj);

let counter = 0;

for (let key in obj) {
  counter++;
  if (typeof obj[key] == "object") {
    for (let i in obj[key]) {
      console.log(` ${key} : ${obj[key][i]},`);
    }
  } else {
    console.log(` ${key} : ${obj[key]},`);
  }
}

console.log(`\n obj obyektda ${counter} ta key mavjud.`); // Keyni aniqlashni 1-usuli
console.log(Object.keys(obj).length); // 2-usuli

const newMethod = {
  makeExample: function () {
    console.log(" Your first method");
  },
};

newMethod.makeExample();

const options = {
  colors: {
    bg: "red",
    border: "coral",
  },
};

const { bg, border } = options.colors; // Obyekt ichidagi obyekt qiymatini olish usuli
console.log(bg);
