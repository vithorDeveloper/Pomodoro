import sounds from "./Sound.js";

export default function Timer(
  {
    displayMinutes,
    displaySeconds,
    resetControls,
  }
){

  let getTimeOut;
  let minutes = Number(displayMinutes.textContent)


  function refreshScreenTime(minutes, seconds){
    displayMinutes.textContent = String(minutes).padStart(2, "0")
    displaySeconds.textContent = String(seconds).padStart(2, "0")
  }
  
  function resetTime() {
    refreshScreenTime(minutes, 0)
    clearTimeout(getTimeOut)
  }
  
  function counterSeconds(){
  
      getTimeOut = setTimeout(function(){
  
        let seconds = Number(displaySeconds.textContent)
        let minutes = Number(displayMinutes.textContent)
        let whenFinish = minutes == 0 && seconds == 0
  
          if(whenFinish){
            resetControls()
            sounds().kitchenTimerEnd()
  
            return
          }
  
          if(seconds == 0){
            seconds = 60
  
            --minutes
          }
  
          refreshScreenTime(minutes, seconds - 1)
  
          counterSeconds()
  
      }, 1000)
  }

  function timerPause(){
    clearTimeout(getTimeOut)
  }

  function refreshMinutes(newMinutes){
    minutes = newMinutes()
  }

  return{
    counterSeconds,
    resetTime,
    refreshScreenTime,
    timerPause,
    refreshMinutes
  }

}



