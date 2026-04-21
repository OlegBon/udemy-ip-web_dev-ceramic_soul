import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";

// Swiper - core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import custom styles
import "/src/sass/style.scss";

// Burger menu
const burger = document.querySelector(".burger"),
  close = document.querySelector(".header__menu-close"),
  menu = document.querySelector(".header__menu");

burger.addEventListener("click", () => {
  menu.classList.add("header__menu_active");
  // document.body.style.overflow = "hidden";
  document.body.classList.add("scroll-off");
});

close.addEventListener("click", () => {
  menu.classList.remove("header__menu_active");
  // document.body.style.overflow = "";
  document.body.classList.remove("scroll-off");
});

// Swiper slider
try {
  // init Swiper:
  new Swiper(".works__slider", {
    slidesPerView: 1,
    loop: true,

    navigation: {
      nextEl: ".icon-right-open",
      prevEl: ".icon-left-open",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      // when window width is >= 1920px
      1920: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
    },
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
  });
} catch (e) {}
