
function screen() {
	move(sn);
	draw(sn);
}


function move(sn) {



}

function draw(sn) {
	if (sn==0) {
		rect(0,0,cWidth,cHeight,'black');
		text("ROOSEY PROJECT",cWidth/2,cHeight/2-100,'white',90,true);
		text("the game",cWidth/2,cHeight/2,'white',40,true);
		text("press anything to continue ",cWidth/2,cHeight/2+200,'white',30,true);
	} else if (sn==1) {
		rect(0,0,cWidth,cHeight,'black');
		drawGrid();
		text("Select your character",cWidth/2,100,'white',50,true);
		drawCharacters();
		drawCharacterText();

		
		
		
		
		


	} else if (sn==2) {
		rect(0,0,cWidth,cHeight,'green');
		canvasContext.drawImage(tylerimg,100,200,150,180);
	} 
	mouseDebug();



}




function mouse(e) {
	
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = e.clientX - rect.left - root.scrollLeft;
	mouseY = e.clientY - rect.top - root.scrollTop;

}

function mouseDebug() {
	var mouseGridX = Math.floor(mouseX / GRID_X);
	var mouseGridY = Math.floor(mouseY / GRID_Y);
	mouseIndex = colRow(mouseGridX,mouseGridY);
	text(Math.floor(mouseX)+","+Math.floor(mouseY)+" : " + mouseIndex, mouseX,mouseY, 'yellow', 30, false);


}

function click() {
	pressAnything();
	selectCharacter();

}

function key(e) {
	pressAnything();
	selectSecretCharacter(e);



}

function pressAnything() {
	if(sn==0) {
		//sound
		setTimeout(function() {
			snAdd();
		});
	}

}

function selectCharacter() {
	if(sn==1) {
		if (mouseIndex==19) {
			character = 0;
			characterSelected();
		} else if (mouseIndex==20) {
			character = 1;
			characterSelected();
		} else if (mouseIndex==21) {
			character = 2;
			characterSelected();
		} else if (mouseIndex==22) {
			character = 3;
			characterSelected();
		} else if (mouseIndex==23) {
			character = 4;
			characterSelected();
		} else if (mouseIndex==24) {
			character = 5;
			characterSelected();
		} else if (mouseIndex==24) {
			character = 6;
			characterSelected();
		} else if (mouseIndex==25) {
			character = 7;
			characterSelected();
		} else if (mouseIndex==38) {
			character = 8;
			characterSelected();
		} else if (mouseIndex==39) {
			character = 9;
			characterSelected();
		} else if (mouseIndex==40) {
			character = 10;
			characterSelected();
		} else if (mouseIndex==41) {
			character = 11;
			characterSelected();
		} else if (mouseIndex==42) {
			character = 12;
			characterSelected();
		} else if (mouseIndex==58) {
			character = 13;
			characterSelected();
		} 

	}

}

function selectSecretCharacter(ex) {
	if(sn==1) {
		if(ex.keyCode==67) {
			character = 99;
			characterSelected()
		} else if(ex.keyCode==82) {
			character = 100;
			characterSelected()
		}

	}

}

function characterSelected() {
	//sound

	setTimeout(function() {
			snAdd();
		});


}

function snAdd() {
	setTimeout(function() {
			sn++;
			console.log("sn " + (sn-1) + " -> " + sn);
		});
}

function colRow(col,row) {
	return col + COLS * row;
}

function drawGrid() {
	for(var eachRow=0;eachRow<ROWS;eachRow++) {
		for (var eachCol=0;eachCol<COLS;eachCol++) {
			var arrayIndex = colRow(eachCol,eachRow);
			if(grid[arrayIndex]==1) {
				rect(GRID_X*eachCol,GRID_Y*eachRow, GRID_X-SPACE,GRID_Y-SPACE, 'white'); //
			}


		}
	}
}
 

function createImages() {
	 tylerimg = document.createElement("img");
	 raymonimg = document.createElement("img");
	 tonyimg = document.createElement("img");
	 michealimg = document.createElement("img");
	 moisesimg = document.createElement("img");
	 matthewimg = document.createElement("img");
	 aaronimg = document.createElement("img");
	 ricardoimg = document.createElement("img");
	 kevinimg = document.createElement("img");
	 adrianimg = document.createElement("img");
	 allenimg = document.createElement("img");
	 maximg = document.createElement("img");
	 joshimg = document.createElement("img");
	 cummingsimg = document.createElement("img");
	 roblesimg = document.createElement("img");
}	 

function loadImages() {
	tylerimg.src = "tyler.png";
	raymonimg.src = "raymon.png";
	tonyimg.src = "tony.png";
	michealimg.src = "micheal.png";
	moisesimg.src = "moises.png";
	matthewimg.src = "matthew.png";
	aaronimg.src = "aaron.png";
	ricardoimg.src = "ricardo.png";
	kevinimg.src = "kevin.png";
	adrianimg.src = "adrian.png";
	allenimg.src = "allen.png";
	maximg.src = "max.png";
}

function drawCharacters() {
	canvasContext.drawImage(tylerimg,100,200,100,100);
	canvasContext.drawImage(raymonimg,200,200,100,100);
	canvasContext.drawImage(tonyimg,300,200,100,100);
	canvasContext.drawImage(tylerimg,400,200,100,100);
	canvasContext.drawImage(tylerimg,500,200,100,100);
	canvasContext.drawImage(matthewimg,600,200,100,100);
	canvasContext.drawImage(tylerimg,700,200,100,100);
	canvasContext.drawImage(tylerimg,200,400,100,100);
	canvasContext.drawImage(tylerimg,300,400,100,100);
	canvasContext.drawImage(tylerimg,400,400,100,100);
	canvasContext.drawImage(allenimg,500,400,100,100);
	canvasContext.drawImage(tylerimg,600,400,100,100);
	canvasContext.drawImage(tylerimg,400,600,100,100);
}

function drawCharacterText() {
		text("Tenacious T",150,315,'white',17,true);
		text("RayRay",250,315,'white',17,true);
		text("Raul",350,315,'white',17,true);
		text("Michelle",450,315,'white',17,true);
		text("Money Mo",550,315,'white',17,true);
		text("lil don",650,315,'white',17,true);
		text("A-A-Ron",750,315,'white',17,true);
		text("Ricky",250,515,'white',17,true);
		text("KevKev",350,515,'white',17,true);
		text("Waluigi",450,515,'white',17,true);
		text("ALLEN",550,515,'white',17,true);
		text("Dog Eater",650,515,'white',17,true);
		text("Potts",450,715,'white',17,true);

}
