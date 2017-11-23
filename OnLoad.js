
window.onload = function() {
	canvas = document.getElementById('gc');
	canvasContext = canvas.getContext('2d');
	setInterval(screen,1000/fps);
	setInterval(function() {
		if(start==2 && sn == 2)
			time++;
	},1000)

	canvas.addEventListener('mousemove',mouse);

	canvas.addEventListener('click',click);

	document.addEventListener("keydown",keyDown);

	document.addEventListener("keyup",keyUp);

	cWidth = canvas.width;
	cHeight = canvas.height;

	createImages();
	loadImages();

	playerX = cWidth/2;
}