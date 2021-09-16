const swiper = new Swiper('.swiper', {
    speed: 700,
    slidesPerView: 4,
    // spaceBetween: 30,
    slidesPerGroup: 2,
    // autoplay: {
    //     delay: 7000,
    //     disableOnInteraction: false,
    // },


    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true
    },
});