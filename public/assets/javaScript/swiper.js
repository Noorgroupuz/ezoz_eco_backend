var swiper = new Swiper(".main_home_page_swiper", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next-home",
    prevEl: ".swiper-button-prev-home",
  },
});

// var swiper = new Swiper(".catalogSwiper", {
//   slidesPerView: 1.5,
//   spaceBetween: 10,
//   gap: 10,
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     // when window width is >= 500px
//     500: {
//       slidesPerView: 2.5,
//       spaceBetween: 20,
//     },
//     // when window width is >= 800px
//     800: {
//       slidesPerView: 4,
//       spaceBetween: 30,
//     },
//     // when window width is >= 1200px
//     1200: {
//       slidesPerView: 6,
//       spaceBetween: 20,
//     },
//   },
// });

var swiper = new Swiper(".services_swiper", {
  slidesPerView: 1.3,
  spaceBetween: 22,
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next-services",
    prevEl: ".swiper-button-prev-services",
  },
  breakpoints: {
    400: {
      slidesPerView: 1.3,
      // spaceBetween: 20,
    },
    // when window width is >= 500px
    500: {
      slidesPerView: 2,
      // spaceBetween: 20,
    },
    // when window width is >= 800px
    800: {
      slidesPerView: 3,
      // spaceBetween: 40,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      // spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".industries_swiper", {
  slidesPerView: 1.3,
  spaceBetween: 20,
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next-industries",
    prevEl: ".swiper-button-prev-industries",
  },
  breakpoints: {
    400: {
      slidesPerView: 1.3,
      // spaceBetween: 20,
    },
    // when window width is >= 500px
    500: {
      slidesPerView: 2,
      // spaceBetween: 20,
    },
    // when window width is >= 800px
    800: {
      slidesPerView: 3,
      // spaceBetween: 40,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      // spaceBetween: 50,
    },
  },
});

// var swiper = new Swiper(".productInfoSwiper", {
//   slidesPerView: 1,
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
