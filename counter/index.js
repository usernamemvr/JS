let count = 0;

const countLabel = document.getElementById('counter');
document.getElementById('incrementor').onclick = function() {
  count++;
  countLabel.textContent = count;
}
document.getElementById('decrementor').onclick = function() {
  count--;
  countLabel.textContent = count;
}
document.getElementById('resetter').onclick = function() {
  count = 0;
  countLabel.textContent = count;
}

console.log(Math.pow(2, 4)); 
