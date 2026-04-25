// import purecss grids
import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";

// Swiper - core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import just-validate
import JustValidate from "just-validate";
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

// Tabs
try {
  const tabs = document.querySelectorAll(".catalog__tab");
  const contents = document.querySelectorAll(".catalog__content-item");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Удаляем активный класс у всех табов и контента
      tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
      contents.forEach((c) => (c.style.display = "none"));

      // Добавляем активный класс к нажатому табу и показываем соответствующий контент
      tab.classList.add("catalog__tab_active");
      contents[index].style.display = "flex";
    });
  });

  // Показываем первый контент при загрузке
  contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
} catch (e) {}

// Обратите внимание, что значение block (в двух местах) можно спокойно поменять на flex, если вам это необходимо
// Поменяла на flex, чтобы не было проблем с адаптивностью

// Touch Form validation
try {
  const validatorTouch = new JustValidate(".touch__form");
  // const validator = new JustValidate("form", { submitFormAutomatically: true });

  validatorTouch
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Please enter your name",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Name must be at least 3 characters",
      },
    ])
    .addField("#email", [
      {
        rule: "required",
      },
      {
        rule: "email",
      },
    ])
    .addField(
      "#question",
      [
        {
          rule: "required",
        },
        {
          rule: "minLength",
          value: 5,
        },
      ],
      {
        errorsContainer: document
          .querySelector("#question")
          .parentElement.querySelector(".textarea-error-message"),
      },
    )
    .addField(
      "#checkbox",
      [
        {
          rule: "required",
        },
      ],
      {
        errorsContainer: document
          .querySelector("#checkbox")
          .parentElement.parentElement.querySelector(".checkbox-error-message"),
      },
    )
    .onSuccess((event) => {
      const form = event.currentTarget;
      const formData = new FormData(form);

      fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Success Form Touch - form was sent", data);
          form.reset();
        });
    });
} catch (e) {}

// Footer Form validation
try {
  const validatorFooter = new JustValidate(".footer__form");
  // const validator = new JustValidate("form", { submitFormAutomatically: true });

  validatorFooter
    .addField(
      "#footer__email",
      [
        {
          rule: "required",
        },
        {
          rule: "email",
        },
      ],
      {
        errorsContainer: document
          .querySelector("#footer__email")
          .parentElement.querySelector(".email-error-message"),
      },
    )
    .addField(
      "#footer__checkbox",
      [
        {
          rule: "required",
        },
      ],
      {
        errorsContainer: document
          .querySelector("#footer__checkbox")
          .parentElement.parentElement.querySelector(".checkbox-error-message"),
      },
    )
    .onSuccess((event) => {
      const form = event.currentTarget;
      const formData = new FormData(form);

      fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Success Form Footer - form was sent", data);
          form.reset();
        });
    });
} catch (e) {}
