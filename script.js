const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');

let infoToBeAdded = document.createTextNode('linear-gradient(to right,'+color1.value+','+color2.value +')');
css.appendChild(infoToBeAdded);

function backgroundColorUpdater() {
	body.style.background = 
	'linear-gradient(to right,' 
	+ color1.value // Note, string addition to non-string changes non-string to string//
	+','           // this equates to: body.style.background = linear-gradient(to rigth,rgb(x,y,z),rgb(a,b,c))//
	+ color2.value 
	+ ')';

	css.textContent = body.style.background;
}

color1.addEventListener('input', backgroundColorUpdater);

color2.addEventListener('input', backgroundColorUpdater);
