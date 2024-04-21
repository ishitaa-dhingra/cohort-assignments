function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  let timeString = "";

  timeString +=
    padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds);

  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;
  timeString +=
    " " +
    padZero(displayHours) +
    ":" +
    padZero(minutes) +
    ":" +
    padZero(seconds) +
    " " +
    ampm;

  console.log(timeString);
}

function padZero(num) {
  return (num < 10 ? "0" : "") + num;
}

setInterval(updateClock, 1000);
