
function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  let diceResult = document.getElementById("diceResult");
  let diceImages = document.getElementById("diceImages");
  if(numOfDice > 6 || numOfDice < 1){
    diceResult.textContent = `Number ${numOfDice} is invalid, Range should be between 1 - 6`;
    diceImages.innerHTML = null;
    return;
  }
  let values = [];
  let images = [];
  console.log(numOfDice);
  for(let i = 0; i < numOfDice; i++) {
    let value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="images/${value}.png" alt="Dice${value}">`)
  }
  diceResult.textContent = `dice Rolled: ${values.join(', ')}`;
  diceImages.innerHTML = images.join(' ');
}
