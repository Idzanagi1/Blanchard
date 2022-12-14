var swiper = new Swiper(".mySwiper", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 34,

    breakpoints: {
        1920: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 47
        },
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 38
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        }
    },

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".projectSwiper", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,

    breakpoints: {
        1920: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },

        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        }
    },

    navigation: {
        nextEl: ".project-button-next",
        prevEl: ".project-button-prev",
    },
});

var swiper = new Swiper(".event__swiper", {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 37,

    breakpoints: {
        1920: {
            spaceBetween: 40
        },
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 28
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },


    navigation: {
        nextEl: ".event-button-next",
        prevEl: ".event-button-prev",
    },

    pagination: {
        el: ".event-swiper-pagination",
    },

});
