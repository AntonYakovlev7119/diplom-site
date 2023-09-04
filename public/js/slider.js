const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  // spaceBetween: 100,

  // autoplay: {
  //   delay: 3000,
  // },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // thumbs: {
  //   swiper: thumbsSwiper,
  // },
});

// horizontal
