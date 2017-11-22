
function rect(leftX,topY, width,height, color) {
	canvasContext.fillStyle = color;
	canvasContext.fillRect(leftX,topY,width,height);
}

function circle(midX,midY,r, color) {
	canvasContext.fillStyle = color;
	canvasContext.beginPath();
	canvasContext.arc(midX,midY,r, 0,Math.PI*2,true);
	canvasContext.fill();
}

function text(string,textX,textY,color,size,center) {
	if(center) {
		canvasContext.textAlign="center";
	} else {
		canvasContext.textAlign="start";
	}
	canvasContext.font="" + size + "px Helvetica";
	canvasContext.fillStyle = color;
	canvasContext.fillText(string,textX,textY);
}
