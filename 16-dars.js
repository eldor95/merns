"use strict";

function playFootball(player, callback) {
  console.log(`Name of player ${player}`);
  callback();
}

playFootball("MoSalah", function () {
  // callback function chaqirayapmiz.
  console.log("He shot 100 goals");
});

playFootball("Eldor");
