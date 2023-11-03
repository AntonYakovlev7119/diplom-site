const nav_container = document.querySelector(".header-nav-container");
const toggle_menu = document.querySelector(".toggle-menu");
const wood_products_description_container = document.querySelectorAll(".wood-products-description-container p");


// window.onload = function(){
  findHighestElement();
// }

// Проверка прокрутки страницы для изменения навигации

window.onscroll = function() {
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
		--move-x: ${(e.clientX - window.innerWidth / 2) * -0.01}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * 0.015}deg;
		`,
  });
});

//Поиск самого большого по высоте .wood-products__description элемента

function findHighestElement(){
  console.log(wood_products_description_container);
  let maxElem = wood_products_description_container[0];
  wood_products_description_container.forEach((elem)=> {
  if(elem.offsetHeight > maxElem.offsetHeight) maxElem = elem;
});
 
  console.log(maxElem);
};
