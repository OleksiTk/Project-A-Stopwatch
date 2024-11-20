let hours = 0;
let minuts = 0;
let seconds = 0;
let timer = document.querySelector(".stopwatch__body--timer--text");
let stopB = document.querySelector(".fa-stop");
let start = document.querySelector(".fa-play");
let reset = document.querySelector(".fa-rotate-right");
let timerId = null;

start.addEventListener("click", StartTime);
stopB.addEventListener("click", StopTime);
reset.addEventListener("click", ResetTime);

function StartTime() {
  timerId = setInterval(function () {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minuts < 10 ? "0" + minuts : minuts;
    let s = seconds < 10 ? "0" + seconds : seconds;
    if (s == 60) {
      seconds = 0;
      minuts++;
    }
    if (m == 60) {
      minuts = 0;
      hours++;
    }

    seconds++;
    timer.innerHTML = `${h}:${m}:${s}`;
  }, 1000);
}
function StopTime() {
  clearInterval(timerId);
}
function ResetTime() {
  hours = 0;
  minuts = 0;
  seconds = 0;
  clearInterval(timerId);
  // Оновлюємо елемент timer
  timer.innerHTML = "00:00:00";
}
