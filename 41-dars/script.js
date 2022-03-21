"use strict";

class Car {
  constructor(name, color, startSpeed, maxSpeed) {
    this.name = name;
    this.color = color;
    this.startSpeed = startSpeed;
    this.maxSpeed = maxSpeed;
  }
  globalSpeedCar() {
    return this.maxSpeed + this.startSpeed;
  }
  slowSpeed() {
    return this.maxSpeed - this.startSpeed;
  }
}

class Truck extends Car {
  constructor(name, color, startSpeed, maxSpeed, weight) {
    super(name, color, startSpeed, maxSpeed);
    this.weight = weight;
  }

  showMyProps() {
    console.log("Weight " + this.weight);
  }
}
const man = new Truck("MAN", "black", 50, 150, 40);
console.log(man);
man.showMyProps();
console.log(man.globalSpeedCar());
console.log(man.slowSpeed());

// const bmw = new Car("bmw", "red", 100, 300);

// bmw.showMyProps();
// console.log(bmw);
