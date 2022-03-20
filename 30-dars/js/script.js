/* -=- Darsga Topshiriq

1) list of news knopkani ochirip tashlang

2) 'BBC' yozuvni orniga 'UzNews'ga almashtiring va rangini oziz istagan rangni tanglang

3) glavniy fon dagi rasimni ozgartiring. Rasim joylashuvi 'img' papkani ichida

4) bizlarda yangiliklardan tashkil topgan massiv bor. 
Yangiliklarni massiv yordamida chiqaring. Html dan ochirip Faqat JS code yozip.

5) yangiliklarni oldiga ularni raqamlarini qoyip chiqimg (1, 2, 3)

6) read more knopkaga border-radius style qoshing

*/

"use strict";

// const newsGenre = document.querySelector(".promo__genre");

// newsGenre.innerHTML = "Hello world"; // html code yozsa buladi

// newsGenre.textContent = "UzNews";  // textContent ga html element yoza olmaymiz

// newsGenre.insertAdjacentHTML("afterend", "<p>Hello world<p/>");

const btnNews = document.querySelector(".promo__btn"),
  newGenre = document.querySelector(".promo__genre"),
  bg = document.querySelector(".promo__bg"),
  List = document.querySelector(".promo__interactive-list");

// List.remove();
btnNews.remove();
newGenre.textContent = "UzNews";
newGenre.style.color = "crimson"; // 2- javob

bg.style.backgroundImage = "url(img/2.jpg)"; //3 javob

const news = [
  "FOOTBALL",
  "BASKETBALL",
  "UFC",
  "BOX",
  "AMERICAN FOOTBAL IN EU...",
];

List.innerHTML = "";

news.forEach((itemNews, index) => {
  List.innerHTML += `
  <li class="promo__interactive-item">
  ${index + 1}. \t${itemNews}
  <div class="delete"></div>
  </li>
`;
});
