const scrollToHandler = (e) => {
  e.preventDefault();
  const btn = e.target.closest('[data-move-to]');
  const target = document.querySelector(btn.dataset.moveTo);

  gsap.to(window, 1, {
    scrollTo: {
      y: target,
    },
    ease: 'power4.out',
  });
};

export const initScrollTo = () => {
  const scrollToButtons = document.querySelectorAll('[data-move-to]');

  scrollToButtons.forEach((btn) => {
    btn.addEventListener('click', scrollToHandler);
  });
};
