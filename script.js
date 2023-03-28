const video = document.querySelector('.video');
const playpauseBtn = document.querySelector('.play-pause');
const muteBtn = document.querySelector('.mute');
const volumeSlider = document.querySelector('.volume-slider');
const progressBar = document.querySelector('.progress-bar');
const progressContainer = document.querySelector('.progress');
const currentTime = document.querySelector('.current-time');
const duration = document.querySelector('.duration');
const fullscreenBtn = document.querySelector('.fullscreen');

let isPlaying = false;
let isMoted = false;

playpauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    video.pause();
    isPlaying = false;
    playpauseBtn.innerHTML = '<span class="fa-solid fa-play"></span>';
  } else {
    video.play();
    isPlaying = true;
    playpauseBtn.innerHTML = '<span class="fa-solid fa-pause"></span>';
  }
});

muteBtn.addEventListener('click', () => {
  if (isMoted) {
    video.muted = false;
    isMoted = false;
    muteBtn.innerHTML = '<span class="fa-solid fa-volume-high"></span>';
  } else {
    video.muted = true;
    isMoted = true;
    muteBtn.innerHTML = '<span class="fa-solid fa-volume-xmark"></span>';
  }
});

volumeSlider.addEventListener("input", function(){
    video.volume = this.value
})
  

function toTime(t){
  var 
      h = ('0'+Math.floor(t/3600) % 24).slice(-2),
      m = ('0'+Math.floor(t/60)%60).slice(-2),
      s = ('0' + t % 60).slice(-2);
  return (h>0?h+':':'')+(m>0?m+':':'')+(t>60?s:s + "s");
}
setInterval(() => {

    currentTime.innerHTML = toTime(Math.round(video.currentTime));
    duration.innerHTML = toTime(Math.round(video.duration));
    progressBar.style.width = ((Math.round(video.currentTime) / Math.round(video.duration) * 100) + "%")
    
}, 1000);


function openFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { 
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { 
    video.msRequestFullscreen();
  }
}



fullscreenBtn.addEventListener("click", openFullscreen)
 
