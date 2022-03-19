"use strict";

const numberOfNews = +prompt("Siz qancha yangilik ko`rdingiz ?");

const personalNewsDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Oxirgi kurgan yangiliklarizdan biri?"),
  b = prompt("Unga qancha baho bergan bo'lar edingiz?");

personalNewsDB.news[a] = b;
console.log(personalNewsDB);
