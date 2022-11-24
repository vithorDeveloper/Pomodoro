import allControls from "./controls.js";
import Timer from "./timer.js"
import sounds from "./Sound.js";
import {
  btnPlay,
  btnPause,
  btnSetTimer,
  btnStop,
  btnSound,
  btnMute,
  displayMinutes,
  displaySeconds
} from "./elements.js"



const controls = allControls(
  {
    btnPlay,
    btnPause,
    btnSetTimer,
    btnStop,
    displayMinutes
  }
)

const configTimer = Timer(
  {
    displayMinutes,
    displaySeconds,
    resetControls: controls.resetStop,
  }
)

const Sounds = sounds()

btnPlay.addEventListener("click", function startTimer(){
  controls.buttonPlay()
  configTimer.counterSeconds()
  Sounds.buttonPress()
})

btnPause.addEventListener("click", function pauseTimer(){
  controls.buttonPause()
  configTimer.timerPause()
  Sounds.buttonPress()
  
})

btnStop.addEventListener("click", function stopTimer(){
  configTimer.resetTime()
  controls.resetStop()
  Sounds.buttonPress()
})

btnSound.addEventListener("click", function sound(){
  btnSound.classList.toggle("hide")
  btnMute.classList.toggle("hide")
  Sounds.bgAudio.play()
})

btnMute.addEventListener("click", function mute(){
  btnSound.classList.toggle("hide")
  btnMute.classList.toggle("hide")
  Sounds.bgAudio.pause()
})

btnSetTimer.addEventListener("click", function setTimer(){
  //  minutes = Number(prompt("Quantos Minutos ?"))
  //  displayMinutes.textContent = String(minutes).padStart(2, "0")
  controls.buttonGettimer()
  configTimer.refreshMinutes()
})

