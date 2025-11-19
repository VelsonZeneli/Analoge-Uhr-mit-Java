const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondPos = (seconds / 60) * 360;
  const minutePos = (minutes / 60) * 360 + (seconds / 60) * 6; 
  const hourPos = (hours % 12 / 12) * 360 + (minutes / 60) * 30;

  
  secondHand.style.transform = `rotate(${secondPos}deg)`;
  minHand.style.transform = `rotate(${minutePos}deg)`;
  hourHand.style.transform = `rotate(${hourPos}deg)`;
}

setInterval(updateClock, 1000);

updateClock();
