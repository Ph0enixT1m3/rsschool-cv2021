const swiper = new Swiper('.swiper', {
    speed: 700,
    slidesPerView: 4,
    slidesPerGroup: 2,

    breakpoints: {
        270: {
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
        992: {
            slidesPerView: 4,
            slidesPerGroup: 2
        }
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true
    },
});


document.querySelector(".toggle-menu").onclick = function() {open()};
function open() {
    document.querySelector(".mobile-menu_list").classList.toggle("show");
    document.querySelector(".main-header").classList.toggle("show");
    document.querySelector(".toggle-menu").classList.toggle("show");
    document.querySelector("body").classList.toggle("show");
}
document.querySelector(".mobile-menu_list").onclick = function() {close()};
function close() {
    document.querySelector(".mobile-menu_list").classList.remove("show");
    document.querySelector(".main-header").classList.remove("show");
    document.querySelector(".toggle-menu").classList.remove("show");
    document.querySelector("body").classList.remove("show");
}
