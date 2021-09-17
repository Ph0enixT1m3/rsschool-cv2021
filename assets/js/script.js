const swiper = new Swiper('.swiper', {
    speed: 700,
    slidesPerView: 4,
    slidesPerGroup: 2,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1
        },
        420: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        420: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 4,
            slidesPerGroup: 2
        }
    },


    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true
    },
});