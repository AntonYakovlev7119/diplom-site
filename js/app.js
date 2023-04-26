const nav_container = document.querySelector(".header-nav-container");

window.onscroll = function () {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 64) {
    nav_container.classList.add("scrolled");
  }
  if (scrollTop < 64) {
    nav_container.classList.remove("scrolled");
  }
};
