
let [seconds ,minutes ,hours]=[0,0,0];
let displayTime=document.getElementById("displayTime");
let timer=null;
function stopwatch(){
  seconds++
  if(seconds==60){
    seconds=0;
    minutes++;
    if(minutes==60){
      minutes=0;
      hours++;
    }
  }
  displayTime.innerHTML=hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
}

function start(){
  if(timer=== null){
 timer = setInterval(stopwatch,1000);
  }
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  timer = null;
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}