const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

function clockTick() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    
    const hourDegree = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    const minuteDegree = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const secondDegree = ((seconds / 60) * 360) + 90

    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
};

setInterval(clockTick, 1000);

