document.addEventListener("DOMContentLoaded", () => {
    let gallerySlider = new Swiper(".slides-container", {
      slidesPerView: 1,
      grid: {
        rows: 1,
        fill: "row"
      },
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
      },
      navigation: {
        nextEl: ".galery-button-next",
        prevEl: ".galery-button-prev"
      },

      breakpoints: {
        441: {
          slidesPerView: 2,
          spaceBetween: 30
        },

        1400: {
          slidesPerView: 3,
          spaceBetween: 60
        }
      },

      a11y: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },

      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      slideVisibleClass: "slide-visible",

      on: {
        init: function () {
          this.slides.forEach((slide) => {
            if (!slide.classList.contains("slide-visible")) {
              slide.tabIndex = "-1";
            } else {
              slide.tabIndex = "";
            }
          });
        },
        slideChange: function () {
          this.slides.forEach((slide) => {
            if (!slide.classList.contains("slide-visible")) {
              slide.tabIndex = "-1";
            } else {
              slide.tabIndex = "";
            }
          });
        }
      }

    });

  let projectSwiper = new Swiper(".project__swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 50,

    breakpoints: {
      1024: {
       slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1,
        },
    },

    navigation: {
      nextEl: ".project-button-next",
      prevEl: ".project-button-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  let eventSwiper = new Swiper(".events__swiper", {
    slidesPerView: 1,
    spaceBetween: 37,

    breakpoints: {
      1920: {
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 26,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 34,
      },
      320: {
        slidesPerView: 1,
      },
    },

    navigation: {
      nextEl: ".event-button-next",
      prevEl: ".event-button-prev",
    },

    pagination: {
      el: ".event-swiper-pagination",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

  });

  let heroSwiper = new Swiper(".js-hero-swiper", {
    allowTouchMove: false,
    loop: true,
    effect: "fade",
    speed: 10000,
    autoplay: {
      delay: 10000,
    },
    pagination: {
      el: ".hero__swiper-pagination",
      type: "fraction",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
});
