const time=document.getElementById("time");
let timer=null;
let startTime=0;
let elapsedTime=0;
let isRunning=false;

function start(){
if(!isRunning){
    startTime=Date.now()-elapsedTime;
    timer=setInterval(update,10);
    isRunning=true;
}

}
function stop(){

}
function reset(){

}
function update(){
  const currentTime=Date.now();
  elapsedTime=currentTime-startTime;
  let hours=math.floor(elapsedTime/(100*60*60));
  let minutes=math.floor(elapsedTime/(100*60)%60);
  let seconds=math.floor(elapsedTime/1000%60);
  let milliseconds=math.floor(elapsedTime%1000/10);

  time.textContent='${hours}:${minutes}:${seconds}:{milliseconds}';
}










