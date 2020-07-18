var css = document.querySelector('h3');
var c1 = document.querySelector('.c1');
var c2 = document.querySelector('.c2');
var body = document.getElementById('container');
var button = document.getElementById('button');

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  c1 = '#';
  c2 = '#';
  for (var i = 0; i < 6; i++) {
    c1 += letters[Math.floor(Math.random() * 16)];
    c2 += letters[Math.floor(Math.random() * 16)];
  }
  body.style.background = "linear-gradient(to right, "
	+ c1.value+","+ c2.value+")";
}


function colorChange(){
	body.style.background = "linear-gradient(to right, "
	+ c1.value+","+ c2.value+")";

	css.textContent= body.style.background + ";";
}


button.addEventListener('click',getRandomColor);
c1.addEventListener('input',colorChange);

c2.addEventListener('input', colorChange);