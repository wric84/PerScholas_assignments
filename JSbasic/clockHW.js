// when the document is loaded, trigger the "documentLoaded" function
//window.addEventListener('DOMContentLoaded', documentLoaded, false);

var startTime;
// var limite;
// var temporizador;
var minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let startSeconds = document.getElementById("startSeconds");
let button = document.getElementById("btnStart");
let totalSeconds = startSeconds.value;
let color = "red";

startSeconds.addEventListener('input', () =>{
  totalSeconds = startSeconds.value 
})

button.addEventListener('click', ()=>{
  setInterval(setTime, 1000);
  function setTime(){
    ++totalSeconds + totalSeconds;
    seconds.innerHTML = pad(totalSeconds % 60);
    minutes.innerHTML = pad(parseInt(totalSeconds/60));
  }
  if (totalSeconds === 3600) {
    document.getElementsByClassName("time").style.background = color;
    clearTimeout(setTime())
  }
  function pad(val){
    let valString = val + "";
    if (valString.length < 2){
      return "0" + valString;
    } else {
      return valString;
    }
  }
})
// minutes.addEventListener("keyup",function(event){
//   event.preventDefault()
//   if (event.keycode == 13){
//     minutes.focus()
//   }
// })
// }

// function documentLoaded() {
//   "use strict";

//   // listen for mouse clicks on the button
//   document.getElementById("btnStart").addEventListener("click", botaoClicked, false);

//   console.log("Documento carregado");
// }

// // when we click on the button, we save the current time, and the time limit. We then
// // create a timer to execute the "updateTime" function once a second.
// function botaoClicked() {
//   "use strict";

//   startTime = new Date();

//   limite = parseInt(document.getElementById("txtTempo").value);

//   clearInterval(temporizador);
//   temporizador = setInterval(updateTime, 1000);
// }

// function updateTime() {
//   "use strict";

//   // read the current time
//   var currentTime = new Date();

//   // calculate how many seconds passed since the start of the timer
//   var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

//   // convert seconds to minutes and seconds (below 60)
//   var minutos = Math.floor(elapsed / 60);
//   var segundos = Math.floor(elapsed % 60);

//   // pad with zeroes on the left to look better
//   if (minutos < 10) {
//     minutos = "0" + minutos;
//   }
//   if (segundos < 10) {
//     segundos = "0" + segundos;
//   }

//   // show the elapsed time
//   document.getElementById("clock").innerHTML = minutos + ":" + segundos;

//   // check if we are above the time limit and set the color of the timer accordingly
//   if (minutos >= limite) {
//     document.getElementById("clock").className = "red";
//   } else {
//     document.getElementById("clock").className = "blue";
//   }

// }