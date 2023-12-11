const initComboSlider = () => {
  const comboSwiper = new Swiper('[data-combo-slider]', {
    slidesPerView: 1.3,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      1280: {
        slidesPerView: 3.3,
      },
      1024: {
        slidesPerView: 2.3,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });
};

export {initComboSlider};
