$(document).ready(function () {



    var swiperBasic = new Swiper('.swiper-basic', {
        loop: true,
        observer: true,
        observeParents: true,
        autoHeight: true,

        navigation: {
            nextEl: '.swiper-button-next-basic',
            prevEl: '.swiper-button-prev-basic',
        },
    });
    var swiperPremium = new Swiper('.swiper-premium', {
        loop: true,
        observer: true,
        observeParents: true,
        autoHeight: true,
        navigation: {
            nextEl: '.swiper-button-next-premium',
            prevEl: '.swiper-button-prev-premium',
        },
    });
    var swiperUltimate = new Swiper('.swiper-ultimate', {
        loop: true,
        observer: true,
        observeParents: true,
        autoHeight: true,
        navigation: {
            nextEl: '.swiper-button-next-ultimate',
            prevEl: '.swiper-button-prev-ultimate',
        },
    });
    var swiperChallenge = new Swiper('.swiper-challenge', {
        loop: true,
        observer: true,
        observeParents: true,
        autoHeight: true,
        navigation: {
            nextEl: '.swiper-button-next-challenge',
            prevEl: '.swiper-button-prev-challenge',
        },
    });


});