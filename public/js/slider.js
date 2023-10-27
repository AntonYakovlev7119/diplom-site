

const swiper_thumbs = new Swiper(".slider-thumbs .slider", {
  direction: "horizontal",
  loop: true,
  speed: 500,
  slidesPerView: 4,
	freeMode: true

})

const swiper = new Swiper(".slider-images .slider", {
  direction: "vertical",
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 250,
	// freeMode: true,
  freeMode:{
    enabled:true,
// sticky:true
  },
  grabCursor: true,
  

  // autoplay: {
  //   delay: 5000,
  //   pauseOnMouseEnter: true,
  //   disableOnInteraction: false,
  //   // reverseDirection:true
  // },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  thumbs: {
    swiper: swiper_thumbs,
  },
});

// horizontal
