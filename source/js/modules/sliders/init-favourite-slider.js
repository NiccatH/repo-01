const initFavouriteSlider = () => {
  const favouriteSwiper = new Swiper('[favourite-slider]', {
    slidesPerView: 1.2,
    spaceBetween: 30,
    autoHeight: true,
    initialSlide: 0,
    direction: 'horizontal',
    navigation: {
      nextEl: '.favourite__button-next',
      prevEl: '.favourite__button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2.2,
      },
    },
    on: {
      beforeInit: (sw) => {
        const firstSlideContent = sw.$el.find('.swiper-slide').eq(0).html();
        const newDummySlide = document.createElement('div');
        newDummySlide.classList.add('swiper-slide');
        newDummySlide.innerHTML = firstSlideContent;

        sw.wrapperEl.appendChild(newDummySlide);
        sw.update();
      },
      slideChange: (sw) => {
        const slideIndex = sw.realIndex;
        const actualVisibleSlides = sw.slides.length - 2;
        if (slideIndex === actualVisibleSlides) {
          sw.slideTo(0);
        }
      },
    },

  });
};

export {initFavouriteSlider};
