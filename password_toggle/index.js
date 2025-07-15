const input = document.getElementById("inputbox");
const inputField = input.querySelector("input"); 
const image = input.querySelector("img");

input.type = "password";

function toggle() {
    const isPassword = inputField.type === "password";
    inputField.type = isPassword ? "text" : "password";
    image.src = isPassword ? "images/eye-close.png" : "images/eye-open.png";
}

