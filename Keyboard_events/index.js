// API_KEY = API_KEY_FROM_OPENWEATHERMAP 70df2311f57db334c6d6c32c495cc1ab

const mybox = document.getElementById("mybox");
const movement = 100;
let x = 0, y = 0; 

document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")) {
        switch(event.key) {
            case "ArrowUp":
                y -= movement;
                break;
            case "ArrowDown":
                y += movement;
                break;
            case "ArrowLeft":
                x -= movement;
                break;
            case "ArrowRight":
                x += movement;
                break;            
        }
    }
    mybox.style.top = `${y}px`;
    mybox.style.left = `${x}px`;
})

document.addEventListener("keyup", event => {
    mybox.textContent = "😄";
    mybox.style.backgroundColor = "lightgreen";
})

document.addEventListener("keydown", event => {
    mybox.textContent = "😯";
    mybox.style.backgroundColor = "tomato";
})