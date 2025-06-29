const myimg = document.getElementById("image");
const mybutton = document.getElementById("mybutton");
const display = myimg.style;

mybutton.addEventListener("click", event => {
    (display.visibility = (display.visibility === "hidden") ? "visible" : "hidden");
})