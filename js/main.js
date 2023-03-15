"use strict";

const tabItem = document.querySelectorAll(".product-tabs__btn-item");
const tabContent = document.querySelectorAll(".product-tabs__content-item");

tabItem.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove("product-tabs__btn-item--active");
  });

  tabContent.forEach(function (item) {
    item.classList.remove("product-tabs__content-item--active");
  });

  tabTarget.classList.add("product-tabs__btn-item--active");
  document
    .querySelector(`#${button}`)
    .classList.add("product-tabs__content-item--active");
}

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu__list--active");
});
