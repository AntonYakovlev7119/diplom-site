const nav_container = document.querySelector(".header-nav-container");
const toggle_menu = document.querySelector(".toggle-menu");

window.onscroll = function () {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 64) {
    nav_container.classList.add("scrolled");
  }
  if (scrollTop < 64) {
    nav_container.classList.remove("scrolled");
  }
};

toggle_menu.addEventListener("click", () => {
  nav_container.classList.toggle("active");
});

// Отслеживание курсора

document.addEventListener("mousemove", (e) => {
  Object.assign(document.documentElement, {
    style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -0.010}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * 0.015}deg;
		`,
  });
});
