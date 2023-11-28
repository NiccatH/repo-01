const initFavouriteSlider = () => {
  const favouriteSwiper = new Swiper('[favourite-slider]', {
    slidesPerView: 1.2,
    grid: {
      rows: 1,
      fill: 'row',
    },
    breakpoints: {
      768: {
        slidesPerView: 2.2,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
    },
    spaceBetween: 30,
    navigation: {
      nextEl: '.favourite__button-next',
      prevEl: '.favourite__button-prev',
    },
    on: {
      slideChange: (sw) => {
        if (sw.isEnd) {
          sw.el.classList.add('is-end');
        } else {
          sw.el.classList.remove('is-end');
        }

      },
      resize: (sw) => {
        sw.update();
      },
    },

  });
};

export {initFavouriteSlider};
