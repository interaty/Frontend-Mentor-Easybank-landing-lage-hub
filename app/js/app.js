const hamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const bodyElem = document.querySelector("body");

hamburger.addEventListener("click", (e) => {
  header.classList.toggle("open");
  if (header.classList.contains("open")) {
    // overlay.classList.remove("fade-out");
    // overlay.classList.add("fade-in");
    fadeElems.forEach(function (element) {
      element.classList.add("fade-in");
      bodyElem.classList.add("noscroll");
      element.classList.remove("fade-out");
    });
  } else {
    // overlay.classList.remove("fade-in");
    // overlay.classList.add("fade-out");
    fadeElems.forEach(function (element) {
      element.classList.add("fade-out");
      bodyElem.classList.remove("noscroll");
      element.classList.remove("fade-in");
    });
  }
});
