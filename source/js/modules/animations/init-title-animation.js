const initTitleAnimation = () => {
  const lastSpan = document.querySelector('.title span:nth-child(2)');

  if (lastSpan) {
    lastSpan.addEventListener('animationend', () => {
      lastSpan.classList.add('animation-done');
    });
  }
};

export {initTitleAnimation};
