const setTabIndexToMinusOne = (elements) => {
  elements.forEach((element) => {
    element.setAttribute('tabindex', '-1');
  });
};

const createAndAppendDummySlide = (sw) => {
  const firstSlideContent = sw.slides[0].innerHTML;

  const newDummySlide = document.createElement('div');
  newDummySlide.classList.add('swiper-slide', 'favourite__slide');
  newDummySlide.innerHTML = firstSlideContent;

  sw.wrapperEl.appendChild(newDummySlide);

  const anchorElements = newDummySlide.querySelectorAll('a');
  const buttonElements = newDummySlide.querySelectorAll('button');
  setTabIndexToMinusOne(anchorElements);
  setTabIndexToMinusOne(buttonElements);

  sw.update();
};

const initFavouriteSlider = () => {
  const favouriteSwiper = new Swiper('[favourite-slider]', {
    slidesPerView: 1.2,
    spaceBetween: 30,
    autoHeight: true,
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
      init: (sw) => {
        createAndAppendDummySlide(sw);
      },
      slideChange: (sw) => {
        const slideIndex = sw.realIndex;
        const actualVisibleSlides = window.innerWidth >= 768 ? sw.slides.length - 2 : sw.slides.length - 1;
        if (slideIndex === actualVisibleSlides) {
          sw.slideTo(0);
        }
      },
    },

  });
};

export {initFavouriteSlider};
