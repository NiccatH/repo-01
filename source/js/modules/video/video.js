const initVideo = () => {
  const videoContainer = document.querySelector('[data-video]');
  const playButton = videoContainer ? videoContainer.querySelector('.video__button') : null;
  const video = videoContainer ? videoContainer.querySelector('video') : null;
  const videoOverlay = videoContainer ? videoContainer.querySelector('.video__overlay') : null;

  const onVideoClick = () => {
    video.pause();
    playButton.classList.remove('is-disabled');
    videoOverlay.classList.add('is-shown');
  };

  const onPlayButtonCLick = () => {
    video.play();
    playButton.classList.add('is-disabled');
    videoOverlay.classList.add('is-active');
    videoOverlay.classList.remove('is-shown');
  };

  playButton.addEventListener('click', onPlayButtonCLick);
  videoOverlay.addEventListener('click', onVideoClick);
};

export {initVideo};
