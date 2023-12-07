const initComboSlider = () => {
  const comboSwiper = new Swiper('[data-combo-slider]', {
    slidesPerView: 1.3,
    spaceBetween: 30,
    autoHeight: true,
    freeMode: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: '.combo__button-next',
      prevEl: '.combo__button-prev',
    },
    breakpoints: {
      1280: {
        slidesPerView: 3.3,
      },
      1024: {
        slidesPerView: 2.3,
      },
      768: {
        slidesPerView: 1.3,
      },
    },
  });
};

export {initComboSlider};
