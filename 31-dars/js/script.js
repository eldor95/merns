"use strict";

const p = document.querySelectorAll("p");

console.log(p);

// Script ga dinamik qushish

function scriptt(scrip) {
  const script = document.createElement("script");

  script.src = scrip;
  script.async = false;

  document.body.append(script);
}

scriptt("js/test1.js");
scriptt("js/test2.js");
