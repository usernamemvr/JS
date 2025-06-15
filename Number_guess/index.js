let answer = Math.floor(Math.random() * 100-1)+1;
let attempts = 0;
let running = true;
let guess;

while(running) {
  guess = window.prompt("Guess a number between 1-100");
  guess = Number(guess);
  if (isNaN(guess)) {
    window.alert("Enter a valid number");
  } else if (!(1 <= guess <= 100)) {
    window.alert("Enter number within 1-100");
  } else {
    attempts++;
    if (guess < answer) window.alert("Too small");
    else if (guess > answer) window.alert("Too big");
    else {
      window.alert(`correct answer you took ${attempts} attempts`);
      running = false;
    }
  }
}

// document.getElementById('myButton').onclick = function() {
//   document.getElementById('number').textContent = Math.round((Math.random() * 5)+1);
// }
