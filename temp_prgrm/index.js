const textbox = document.getElementById("textbox");
const Celcius = document.getElementById("toFahrenheit");
const Fahrenheit = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert(event) {
  event.preventDefault();
  temp = Number(textbox.value);
  if(Celcius.checked) {
    result.textContent = `${temp*(9/5) + 32}°F`;
  } else if(Fahrenheit.checked) {
    result.textContent = `${temp*(5/9) - 32}°C`;
  } else {
    result.textContent = "Select a unit";
  }
}
