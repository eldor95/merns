"use strict";
const text = "Hello world";
console.log(text[1]);
console.log(text[3]);
console.log(text[7]);
console.log(text[9]);

const arr = [1, 2, 3, 4, 5];

console.log(arr.length);

console.log(text[2]);

console.log(text.toUpperCase()); //Harfalarni hammasini katta harfgha utq  izadi
console.log(text.toLowerCase());

console.log(text.indexOf("H")); // H harfi qaysi indexda turganini topadi

console.log(text.slice(6, 11)); //6- elimentdan 11 elementgacha uqib beradi

console.log(text.substring(2)); // 2 - elementdan uqib boshlaydi

console.log(text.substr(6, 11));

const number = 8.4;

console.log(Math.round(number)); //round methodi sonni yaxlitlaydi
console.log(Math.ceil(number)); // ceil methodi sonni kottasiga yaxlitlaydi.

const borderwidth = "12px";
console.log(parseInt(borderwidth)); // parseInt satrni songa uzgartiradi.
console.log(parseInt("453sfa")); // parseInt son bilan boshlangan satrni songa uzgartiradi.
