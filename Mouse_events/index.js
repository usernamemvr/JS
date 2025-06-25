const mybox = document.getElementById("mybox");
const myButton = document.getElementById("myButton");


myButton.addEventListener("click", event => {
    mybox.style.backgroundColor = "red";
    mybox.textContent = "OUCH! 🤕";
});

myButton.addEventListener("mouseover", event => {
    mybox.style.backgroundColor = "yellow";
    mybox.textContent = "Don't do it! 😯";
});

myButton.addEventListener("mouseout", event => {
    mybox.style.backgroundColor = "lightgreen";
    mybox.textContent = "Click me 😄";
});