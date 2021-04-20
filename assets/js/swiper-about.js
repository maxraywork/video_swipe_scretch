$(document).ready(function () {
  var swiper = new Swiper(".swiper-container.two", {
    effect: "coverflow",
    grabCursor: true,
    loop: false,
    centeredSlides: true,
    slidesPerView: "auto",

    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 70,
      modifier: 5,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  $(".swiper-slide:first-child .card-time").before("<div class='banner-alert-slide'>SLIDE TO START INTERACT</div>");
  swiper.on("touchStart", () => {
    $(".banner-alert-slide").fadeOut("slow");
  });
});
