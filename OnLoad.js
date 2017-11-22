
window.onload = function() {
	canvas = document.getElementById('gc');
	canvasContext = canvas.getContext('2d');
	setInterval(screen,1000/fps);

	canvas.addEventListener('mousemove',mouse);

	canvas.addEventListener('click',click);

	document.addEventListener("keydown",key);

	cWidth = canvas.width;
	cHeight = canvas.height;

	createImages();
	loadImages();
	console.log("I got this far")
}