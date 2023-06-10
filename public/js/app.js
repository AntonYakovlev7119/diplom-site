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

// Корзина

const product_cards = document.querySelectorAll(".product");
const cart_icon = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart");
const cart_container = document.querySelector(".cart-container");
const cart_dark_canvas = document.querySelector(".cart-dark-canvas");
const cart_close_cross = document.querySelector(".cart__close-cross");
const product_to_cart_button = document.querySelectorAll(
  ".buy-product__button"
);

window.onload = addProductToCart();

// Настройка карточек товаров

product_cards.forEach((elem) => {
  if (!localStorage.cart) return;

  const cart = JSON.parse(localStorage.cart);

  if (cart.hasOwnProperty(elem.dataset.id)) {
    elem.querySelector(".buy-product__button").style.cssText =
      "pointer-events: none; background: grey";
  }
});

// Открытие корзины

cart_icon.addEventListener("click", () => {
  cart.classList.add("active");
  cart_dark_canvas.classList.add("active");
});

// Закрытие корзины

[cart_dark_canvas, cart_close_cross].forEach((elem) => {
  elem.addEventListener("click", () => {
    cart.classList.remove("active");
    cart_dark_canvas.classList.remove("active");
  });
});

// Настройка кнопки товарной карточки

product_to_cart_button.forEach((elem) => {
  elem.addEventListener("click", async (element) => {
    const product_id = element.target.parentElement.parentElement.dataset.id;
    const product_img =
      element.target.parentElement.previousElementSibling.src.split("/")[4];
    const product_title =
      element.target.parentElement.firstElementChild.innerHTML;
    const product_price =
      element.target.previousElementSibling.childNodes[2].textContent.split(
        "р."
      )[0];

    element.target.style.cssText = "pointer-events: none; background: grey";

    const product = {
      id: product_id,
      img: product_img,
      title: product_title,
      price: product_price,
      count: 1,
    };

    if (!localStorage.cart) {
      localStorage.cart = JSON.stringify({ [product_id]: product });
    } else {
      const cart = JSON.parse(localStorage.cart);
      cart[product_id] = product;
      localStorage.cart = JSON.stringify(cart);
    }

    addProductToCart();
  });
});

async function addProductToCart() {
  const response = await fetch("/get_cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: localStorage.cart,
  });

  const result = await response.text();

  cart_container.innerHTML = result;

  const cart_increase_product_button = cart_container.querySelectorAll(
    ".cart-product__increase-count"
  );
  const cart_decrease_product_button = cart_container.querySelectorAll(
    ".cart-product__decrease-count"
  );
  const cart_delete_product_button = cart_container.querySelectorAll(
    ".cart-product__delete"
  );
  const cart_count_indicator = cart_container.querySelectorAll(
    ".cart-products-count-indicator"
  );

  cart_increase_product_button.forEach((elem) => {
    elem.addEventListener("click", (element) => {
      const product_count = Number.parseInt(
        element.target.previousElementSibling.innerHTML
      );
      const cart = JSON.parse(localStorage.cart);

      element.target.previousElementSibling.innerHTML = product_count + 1;

      console.log(element.target.previousElementSibling);
    });
  });
}
