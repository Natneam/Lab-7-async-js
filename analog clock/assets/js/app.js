let hourHand = document.getElementById('hour-hand');
let minuteHand = document.getElementById('minute-hand');
let secondHand = document.getElementById('second-hand');


document.addEventListener('DOMContentLoaded', _=>{
    secondHand.style.transform = `rotate(${(new Date).getSeconds()}deg)`;
    minuteHand.style.transform = `rotate(${(new Date).getMinutes()}deg)`;
    hourHand.style.transform = `rotate(${(new Date).getHours()%12}deg)`;
});

setInterval(rotateHands, 1000);

function rotateHands(){
    secondHand.style.transform = `rotateZ(${(new Date).getSeconds()*6}deg)`
    minuteHand.style.transform = `rotateZ(${(new Date).getMinutes()*6}deg)`
    hourHand.style.transform = `rotateZ(${((new Date).getHours()*30)}deg)`
}