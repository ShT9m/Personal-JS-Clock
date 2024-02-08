function showClock(){
  const time = new Date();
  
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  const showHours = hour.toString().padStart(2, '0');
  const showMinutes = min.toString().padStart(2, '0');
  const showSeconds = sec.toString().padStart(2, '0');

  const clock = document.getElementById('clock');
  clock.textContent = `${showHours}:${showMinutes}:${showSeconds}`;
  setTimeout(showClock, 1000);
}

showClock();
console.log(showClock());