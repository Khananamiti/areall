window.addEventListener("DOMContentLoaded", event => {
  const navBtn = document.querySelector(".nav-icon-btn");
  const navIcon = document.querySelector(".nav-icon");
  const nav = document.querySelector(".header__top-row");

  navBtn.onClick = function () {
    navIcon.classList.toggle("nav-icon--active");
    nav.classList.toggle("header__top-row--mobile");
    document.body.classList.toggle("no-scroll");
  };
})

