const introVideo: HTMLVideoElement = document.querySelector("#intro-video");

const introSoundControlBTN: HTMLButtonElement =
  document.querySelector("#sound-control-BTN");

introSoundControlBTN.addEventListener("click", () => {
  console.log("jj");
  if (introVideo.muted) {
    introVideo.muted = false;
    introSoundControlBTN.innerHTML = `<img class='w-5 h-5 ' src='/icon/sound-mute.png' alt='باز کردن صدا' />`;
  } else {
    introVideo.muted = true;
    introSoundControlBTN.textContent = "با صدا ببینید";
  }
});
