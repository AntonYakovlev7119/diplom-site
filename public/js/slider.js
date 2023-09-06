

const swiper_thumbs = new Swiper(".slider-thumbs .slider", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  slidesPerView: 4,
  spaceBetween: 100,
  mousewheel: true,
	freeMode: true,
})

const swiper = new Swiper(".slider-images .slider", {
  direction: "vertical",
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 250,
	freeMode: true,
  grabCursor: true,
  focusableElements: ".swiper-slide",

  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  thumbs: {
    swiper: swiper_thumbs,
  },
});

// horizontal
