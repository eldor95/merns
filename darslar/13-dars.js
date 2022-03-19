"use strict";

let x = 5;
//first method while
while (x < 10) {
  console.log(x);
  x++;
}

// do while sikl method
do {
  console.log(x);
  x++;
} while (x < 10);

// for sikl operator
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//example for sikl
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
