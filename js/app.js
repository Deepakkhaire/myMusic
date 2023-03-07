let cl = console.log;

const play = document.getElementById("play")
const pause = document.getElementById("pause")
const playsongs = document.getElementById("playsongs")
const audioPlayer = document.getElementById("audioPlayer")

let count = 0;


const onClickPlay = () => {
  // cl("clicked")
  if(count == 0){
    count = 1
    audioPlayer.play()
  }
  play.classList.add("d-none")
  pause.classList.remove("d-none")
}

const onClickPause = ()=> {
  onClickPlay();
  audioPlayer.pause()
  audioPlayer.currentTime = 0; 
  pause.classList.add("d-none")
  play.classList.remove("d-none")
}


play.addEventListener("click", onClickPlay)
pause.addEventListener("click", onClickPause)