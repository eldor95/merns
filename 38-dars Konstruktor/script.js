"use strict";

// const func = new Function();
// console.log(func);

// ECMA Script 5  version___________
function Car(name, color, airBag) {
  this.name = name;
  this.color = color; // this bu yerda kantex bulyapti
  this.airBag = airBag;
  this.isBuy = false; // Globalniy qiymat
  this.speed = function () {
    // Globalniy method
    console.log(`${this.name} has 100km/h`);
  };
}
Car.prototype.town = function () {
  console.log("New York");
};

const merc = new Car("MERC", "black", true);
const bmw = new Car("BMW", "red", false);

merc.speed();
bmw.speed();

merc.town();

// console.log(merc);
// console.log(bmw);

class NewCar {
  constructor(name, color, airBag) {
    this.name = name;
    this.color = color;
    this.airBag = airBag;
  }
}
