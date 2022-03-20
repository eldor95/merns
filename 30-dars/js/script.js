"use strict";

// const newsGenre = document.querySelector(".promo__genre");

// newsGenre.innerHTML = "Hello world"; // html code yozsa buladi

// newsGenre.textContent = "UzNews";  // textContent ga html element yoza olmaymiz

// newsGenre.insertAdjacentHTML("afterend", "<p>Hello world<p/>");
document.addEventListener("DOMContentLoaded", () => {
  const btnNews = document.querySelector(".promo__btn"),
    newGenre = document.querySelector(".promo__genre"),
    bg = document.querySelector(".promo__bg"),
    List = document.querySelector(".promo__interactive-list"),
    addInput = document.querySelector(".adding__input"),
    addForm = document.querySelector(".add"),
    checkbox = addForm.querySelector("[type='checkbox']");

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

  const sortArr = (arr) => {
    arr.sort();
  };
  //___________________
  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favourite = checkbox.checked;
    // console.log(favourite);
    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 21)}...`;
      }
      if (favourite) {
        console.log("sevimli yangilik qo`shilmoqda");
      }
      news.push(newFilm);
      sortArr(news);
      createNewsList(news, List);
    }
    addInput.value = "";
  });

  function createNewsList(newsList, parent) {
    parent.innerHTML = "";
    sortArr(news);

    newsList.forEach((itemNews, index) => {
      parent.innerHTML += `
      <li class="promo__interactive-item">
      ${index + 1}. \t${itemNews}
      <div class="delete"></div>
      </li>
    `;
    });
    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        news.splice(i, 1); /// splice bu massivdan element uchiradi i bu yerdan start element  1 esa elementlar soni
        createNewsList(newsList, parent);
      });
    });
  }

  createNewsList(news, List);
});
