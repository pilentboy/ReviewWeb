const introVideo: HTMLVideoElement = document.querySelector("#intro-video");

introVideo.addEventListener("click", () => {
  if (introVideo.muted) {
    introVideo.muted = false;
  } else {
    introVideo.muted = true;
  }
});
