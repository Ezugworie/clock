let hour = 0;
let minute = 0;
let seconds = 0;
let isTwelveHourClock = false;
let btnSetHours = document.getElementById('hoursButton');



function changeHours() {
  if(isTwelveHourClock){
      isTwelveHourClock = false;
    //   btnSetHours.nodeValue = 'Change to 12 hours clock';
      document.querySelector('#hoursButton').textContent = 'Change to 12 hours clock';

  }else{
    isTwelveHourClock = true;
    // btnSetHours.nodeValue = 'Change to 24 hours clock';
    document.querySelector('#hoursButton').textContent = 'Change to 24 hours clock';

  }
}

btnSetHours.addEventListener("click", changeHours());


function createClock() {
  let clockDisplay = new Date();
  hour = clockDisplay.getHours();
  minute = clockDisplay.getMinutes();
  seconds = clockDisplay.getSeconds();

//set clock to 12hours
if(!isTwelveHourClock){
    if (hour < 12) {
        seconds += " AM";
      } else if(hour > 12) {
        hour -= 12;
        seconds += " PM";
      }
  }


  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }

  

  document.getElementById("clock-display").innerHTML =
    hour + ":" + minute + ":" + seconds;
}

window.setInterval(createClock, 1000);
