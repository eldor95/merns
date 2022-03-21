"use strict";

// context this - bu xar doim nimagadur narsaga ergashadi

// function hi() {
//   console.log(this);
// }

// hi();

// function showThis(a, b) {
//   console.log(this); // undefined

//   function calc() {
//     console.log(this); // undefined
//     return a + b;
//   }
//   console.log(calc());
// }

// showThis(2, 8);

//____________________________

// 2- usul: context this objectlarda = object
const obj = {
  a: 8,
  b: 10,
  calc: function () {
    console.log(this.a + this.b);
  },
};
obj.calc();

//_______________________________________________

/// 3- usul: Context this Constructor va Classlarda = yangi object copy
function Car(name, color) {
  this.name = name;
  this.color = color;
  this.hi = function () {
    console.log("hi");
  };
}

const merc = new Car("MERC", "black");
console.log(merc);
merc.hi();

//________________________________________
// 4- usul:
