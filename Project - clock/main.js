"use strict";
const hourN = document.querySelector(".hour");
const secN = document.querySelector(".sec");
const minN = document.querySelector(".min");

function updateClock() {
  const currentdate = new Date();
  setTimeout(updateClock, 1000);
  const hour = currentdate.getHours();

  const minute = currentdate.getMinutes();
  const sec = currentdate.getSeconds();

  const hourDegree = (hour / 12) * 360;
  hourN.style.transform = `rotate(${hourDegree}deg)`;
  const minDegree = (minute / 60) * 360;
  minN.style.transform = `rotate(${minDegree}deg)`;
  const secDegree = (sec / 60) * 360;
  secN.style.transform = `rotate(${secDegree}deg)`;
}

updateClock();

document.querySelector("#btn2").addEventListener("click", function () {
  document.querySelector(".clock").style.backgroundImage =
    " url(images/clock-face-g2b721665d_1920.png)";

  document.querySelector(".number").style.display = "none";
  document.querySelector(".clock").style.backgroundColor = "rgb(230, 63, 41)";
  document.querySelector("#btn1").style.backgroundColor = "rgb(237, 234, 240)";
  document.querySelector("#btn2").style.backgroundColor = "blueviolet";
});

document.querySelector("#btn1").addEventListener("click", function () {
  document.querySelector(".clock").style.backgroundImage =
    " url(images/toppng.com-ghost-720x720.png)";
  document.querySelector(".clock").style.backgroundColor = "burlywood";

  document.querySelector(".number").style.display = "block";
  document.querySelector("#btn2").style.backgroundColor = "rgb(237, 234, 240)";
  document.querySelector("#btn1").style.backgroundColor = "blueviolet";
});
