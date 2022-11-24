export default function allControls(
    {
      btnPlay,
      btnPause,
      btnSetTimer,
      btnStop,
      displayMinutes
    }
){

  function resetStop() {
    btnPlay.classList.remove("hide")
    btnPause.classList.add("hide")
    btnSetTimer.classList.remove("hide")
    btnStop.classList.add("hide")
  }

  function buttonPlay(){
    btnPlay.classList.add("hide")
    btnPause.classList.remove("hide")
    btnSetTimer.classList.add("hide")
    btnStop.classList.remove("hide")
  }

  function buttonPause(e){
    btnPlay.classList.remove("hide")
    btnPause.classList.add("hide")
  }

  function buttonGettimer(){
    let newMinutes = Number(prompt("Quantos Minutos ?"))
    displayMinutes.textContent = String(newMinutes).padStart(2, "0")
  }

  return{
      resetStop,
      buttonPlay,
      buttonPause,
      buttonGettimer
  }
}