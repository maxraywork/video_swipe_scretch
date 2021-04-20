
	var pop = new Swiper(".pop", {
    loop: false,
   // slidesPerView: "auto"
	});
  var swiper = new Swiper(".swiper-container.two", {
    effect: "coverflow",
    loop: false,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflow: {
      rotate: 0,
      stretch: 100,
      depth: 150,
      modifier: 1.5,
      slideShadows: false,
    },
  });

  swiper.controller.control = pop;
  pop.controller.control = swiper;


