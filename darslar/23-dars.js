"use strict";

const personalNewsDB = {
  count: 0,
  news: {},
  actors: {},
  genres: [],
  privat: false,
  startProject: function () {
    personalNewsDB.count = +prompt("Siz qancha yangilik ko`rdingiz?");

    while (
      personalNewsDB.count == "" ||
      personalNewsDB.count == null ||
      isNaN(personalNewsDB.count)
    ) {
      personalNewsDB.count = +prompt("Siz qancha yangilik ko`rdingiz?");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalNewsDB);
    }
  },
  rememberNews: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Oxirgi ko'rgan yangiliklarizdan biri?"),
        b = prompt("Unga qancha baho bergan bo'lar edingiz?");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalNewsDB.news[a] = b;
        console.log("tayyor");
      } else {
        console.log("Error");
        i--;
      }
    }
  },
  showPersonalLevel: function () {
    console.log(typeof personalNewsDB.count);
    if (personalNewsDB.count < 10) {
      console.log("Juda oz sonli yangiliklar o'qilibdi");
    } else if (personalNewsDB.count >= 10 && personalNewsDB < 30) {
      console.log("Siz klassik tomoshabinsiz");
    } else if (personalNewsDB.count >= 30) {
      console.log("Siz yangiliklar ishqibozisiz");
    }
  },
  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      personalNewsDB.genres[i] = prompt(
        `sizga yoqqan janringiz ${i}`
      ).toLowerCase;
      if (personalNewsDB.genres[i] == "" || personalNewsDB.genres[i] == null) {
        console.log("Siz notug`ri ma'lumot kiritdingiz!");
        i--;
      } else {
        continue;
      }
    }
  },
};
