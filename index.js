function Updateclock(){

const now = new Date();
let hours=now.getHours();
const meridiem= hours>=12 ? "Pm" : "Am";
hours=hours%12 || 12;
const minutes = now.getMinutes().toString().padStart(2,"0");
const seconds=now.getSeconds().toString().padStart(2,"0");

const timeString= `${hours}:${minutes}:${seconds}${meridiem}`;
document.getElementById("clock").textContent=timeString;

}


Updateclock();
setInterval(Updateclock,1000);