let time = document.querySelector(".time")
let dateEl = document.querySelector(".date")

function updateTime(){

let hour = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds();
let date = new Date().getDate();
let month = new Date().getMonth()+1;
let year = new Date().getFullYear();


if(hour>12){
    hour = hour-12;
}

hour = hour<10? `0${hour}`:hour;
min = min<10 ? `0${min}`:min;
sec = sec<10 ? `0${sec}`:sec;

let finaltime = `${hour} : ${min} : ${sec}`
let finaldate = `${date} / ${month} / ${year}`
time.innerText = finaltime;
dateEl.innerText = finaldate;

setTimeout(updateTime, 1000);

}

updateTime()