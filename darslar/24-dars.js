"use strict";

let x = 3;

alert(++x);

//const
//var

let o = 10;
o = 15;
console.log(o);

console.log(y);
var y = 5;
y = 20;

let d = 4;

let q = (d = 8);

console.log(q);
console.log(d);

console.log([] + 1 + 2);

console.log(typeof [1, 2]); //Object qiymat beradi
console.log(typeof ([] + 1)); // String qiymat qaytaradi

console.log(1 + [] + 2);

alert("1"[0]);

console.log(2 && 1 && null && true && undefined);

console.log(null || (4 && 3) || undefined);
console.log("olma" > "yolbars");

alert(+"infinity"); // NaN chiqadi

const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b); /// false chiqadi teng emas.
