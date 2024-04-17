// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

//with setinterval
let count = 0;

function updatecounter() {
  count++;
  console.log(count);
}
setInterval(updatecounter, 1000);

// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function updateCounter() {
  count++;
  console.log(count);
  setTimeout(updateCounter, 1000);
}

updateCounter();
