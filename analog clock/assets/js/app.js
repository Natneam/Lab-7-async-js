let hourHand = document.getElementById('hour-hand');
let minuteHand = document.getElementById('minute-hand');
let secondHand = document.getElementById('second-hand');


document.addEventListener('DOMContentLoaded', _=>{
    secondHand.style.transform = `rotate(${(new Date).getSeconds()}deg)`;
    minuteHand.style.transform = `rotate(${(new Date).getMinutes()}deg)`;
    hourHand.style.transform = `rotate(${(new Date).getHours()*30}deg)`;
});

setInterval(rotateHands, 1000);

function rotateHands(){
    let sec = (new Date).getSeconds();
    let minute = (new Date).getMinutes();
    let hour = (new Date).getHours();
    secondHand.style.transform = `rotateZ(${sec*6}deg)`
    minuteHand.style.transform = `rotateZ(${minute*6}deg)`
    hourHand.style.transform = `rotateZ(${(hour*30 + minute*0.5)}deg)`

    // console.log(`Seconds: ${sec}`)
    // console.log(`Minutes: ${minute}`)
    // console.log(`Hours: ${hour}`)
}