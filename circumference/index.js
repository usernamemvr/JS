let radius;
const PI = 3.14; 
document.getElementById('btn').onclick = function() {
    radius = document.getElementById('text').value;
    document.getElementById('result').textContent = `Circumference of the circle is ${2 * PI * radius}cm`;
}