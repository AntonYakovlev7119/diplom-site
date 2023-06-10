// ============= Админ панель/управление заявками =============

const orders = document.querySelectorAll(".order");
const order_content = document.querySelector(".order-content");
const dark_canvas = document.querySelector(".dark-canvas");
const close_order_window_cross = document.querySelector(".cart__close-cross");

orders.forEach((elem) => {
  elem.addEventListener("click", (elem) => {
    orders.forEach((elem) => {
      elem.style.cssText = "background: inherit; color: black";
    });
    elem.target.parentElement.style.cssText =
      "background: rgb(69, 58, 218); color: white";
  });
});

orders.forEach((elem) => {
  elem.addEventListener("dblclick", () => {
    order_content.classList.add("active");
    dark_canvas.classList.add("active");
  });
});

[dark_canvas, close_order_window_cross].forEach((elem) => {
  elem.addEventListener("click", () => {
    order_content.classList.remove("active");
    dark_canvas.classList.remove("active");
  });
});
