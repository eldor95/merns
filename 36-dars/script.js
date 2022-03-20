"use strict";

const startData = new Date();
console.log(startData.getTime());
// console.log(data.getMilliseconds());
// console.log(data.getTime()); //1970 yildan millisekundlarda ulchaydi
// console.log(data.getTimezoneOffset()); // UTC vaqtga chamalash -300

// console.log(data.setHours(11));/// vaqtni uzgartiramiz
// console.log(data);

function timer() {
  for (let i = 0; i <= 10000; i++) {
    let a = i ** 2;
    if (a == 10000 ** 2) {
      alert("time");
      // console.log(`${startData.getMilliseconds() - endData.getMilliseconds()}`);
    }
  }
}
timer();
const endData = new Date();
// alert(`Tsikl ${endData - startData} millisikund`);
console.log(endData.getTime());
console.log(`${startData.getMilliseconds() - endData.getMilliseconds()}`);
