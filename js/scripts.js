var search_btn = document.querySelector(".search_btn");
var close_btn = document.querySelector(".close_btn");
var search_bar_input = document.querySelector(".search_bar_input");
var search_bar_wrap = document.querySelector(".search_bar_wrap");

search_btn.addEventListener("click", function () {
  search_bar_wrap.classList.add("active");
  search_bar_input.focus();
});

close_btn.addEventListener("click", function () {
  search_bar_wrap.classList.remove("active");
});

// Navigation menu

const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
});