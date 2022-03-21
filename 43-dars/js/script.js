window.addEventListener("DOMContentLoaded", () => {
  // LOADER

  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.opacity = "0";
    setTimeout(function () {
      loader.style.display = "none";
    }, 400);
  }, 400);

  // TABS

  const tabs = document.querySelectorAll(".tabheader__item"),
    tabContent = document.querySelectorAll(".tabcontent"),
    headerParents = document.querySelector(".tabheader_items");

  function hideTabContent() {
    tabContent.forEach((item) => {
      item.style.display = "none";
    });
  }
});
