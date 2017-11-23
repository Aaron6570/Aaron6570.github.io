
function screen() {
	move(sn);
	draw(sn);
}


function move() {
	if (sn==2 && start==0) {
		startCounter();
	} else if (boosting && start == 1 && sn == 2) {
		sn = 4;
		console.log("GAME OVER")
		

	} else if (sn==2 && start==2) {
		console.log("playerY: " + playerY + " playerVy: " + playerVy + " boosting?: " + boosting + " boostAmount: " + boostAmount + " seconds: " + time + " finished?: " + finished);
		miles = playerY/3333
		playerX += playerVx;
		if(hasBoosted) {
			playerY += playerVy;
		}
		if ((!heldRight && !heldLeft)||(heldRight && heldLeft)) {
			if (Math.floor(playerVx*2) != 0) { // if Vx is not a small decimal
				if (playerVx > 0) {
					playerVx -= friction;
				} else if (playerVx < 0)
					playerVx += friction;
			}
		}
		if (playerVx <= 5 && heldRight && !heldLeft) {
			playerVx += playerAx;
		}
		if (playerVx >= -5 && heldLeft && !heldRight) {
			playerVx -= playerAx;
		}
		if (boosting && boostAmount > 0 && !finished) {
			if (playerVy <= boostLim) {
				playerVy += boostA;
			} 
			boostAmount--;
		} else {
			if (playerVy > 1) {
				playerVy -= boostA;
			}
		}
		if(playerY > 10000) {
			timeFinal = time;
			finished = true;
		}
		if (playerVy == 0) {
			sn = 3;
			console.log(timeFinal);
		}
		if (finished && sn == 2 && playerVy>0) {
			console.log("im slowing down")
			playerVy -= 0.005;
		}
		if (finished && playerVy < 0 && sn == 2) {
			playerVy = 0;
		}



	}



}

function draw() {
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
		circle(playerX,cHeight*(3/4),35,'white');
		rect(0,0,330,100,'gray');
		rect(15,15,boostAmount/2,75,'lime');
		canvasContext.font = "30px helvetica"
		canvasContext.fillStyle = 'white'
		canvasContext.textAlign="right";
		canvasContext.fillText(Math.floor(miles*10)/10 + " miles",cWidth-15,50);
		canvasContext.fillText(time + " seconds",cWidth-15,100);

	} else if (sn==-1) {
		rect(cWidth * (1/5),cHeight * (1/3),cWidth*(3/5),cHeight*(1/3),'gray');
		text("Paused",cWidth/2,cHeight/2-50,'black',50,true);
		text("Press escape to continue",cWidth/2,cHeight/2+50,'black',35,true)
	} else if (sn==3) {
		rect(cWidth * (1/5),cHeight * (1/3),cWidth*(3/5),cHeight*(1/3),'gold');
		text("You finished 1st place!",cWidth/2,cHeight/2-50,'black',50,true);
		text("Your time was " + time + " seconds",cWidth/2,cHeight/2+50,'black',35,true);
		text("Click to restart",cWidth/2,cHeight/2+100,'black',30,true);
	} else if (sn==4) {
		rect(cWidth * (1/5),cHeight * (1/3),cWidth*(3/5),cHeight*(1/3),'black');
		text("You false started!",cWidth/2,cHeight/2-50,'white',50,true);
		text("What a failure! ",cWidth/2,cHeight/2+50,'white',35,true);
		text("Click to restart",cWidth/2,cHeight/2+100,'white',30,true);
	}

	mouseDebug();



}

function startCounter() {
	if (start == 0) {
		start = 1;
		setTimeout(function() {
			console.log("3");
		},500);
		setTimeout(function() {
			console.log("2");
		},1500);
		setTimeout(function() {
			console.log("1");
		},2500);
		setTimeout(function() {
			console.log("GO");
			start = 2;
		},3500);
}
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
	if (mouseDebugEnabled) {
		text(Math.floor(mouseX)+","+Math.floor(mouseY)+" : " + mouseIndex, mouseX,mouseY, 'yellow', 30, false);
	}
	


}

function click() {
	pressAnything();
	selectCharacter();

}

function keyDown(e) {
	pressAnything();
	selectSecretCharacter(e);
	pause(e);
	unpause(e);
	playerMoveInput(e);
	boost(e);

}

function keyUp(e) {
	playerMoveInputRelease(e);
	boostRelease(e);
}

function boost(ex) {
	if (ex.keyCode == 32 && boostAmount >= 0 && sn == 2) {
		boosting = true;
		hasBoosted = true;
	}

}

function boostRelease(ex) {
	if (ex.keyCode == 32 && sn == 2) {
		boosting = false;
	}
}


function playerMoveInput(ex) {
	if (ex.keyCode == 39) {
		heldRight = true;
	} else if (ex.keyCode == 37) {
		heldLeft = true;
	}
}

function playerMoveInputRelease(ex) {
	if (ex.keyCode == 39) {
		heldRight = false;
	} else if (ex.keyCode == 37) {
		heldLeft = false;
	}
}

function pause(ex) {
	if(sn==2) {
		if(ex.keyCode==27) { //escape
			sn=-1;
			select.play();
			pauseWait = true;
		
		}	
	}

}

function unpause(ex) {
	if(sn==-1) {
		setTimeout(function() {
			pauseWait = false;
		},50);
		if(ex.keyCode==27 && !pauseWait) {
			select.play();
			sn=2;
		}

	}

}

function pressAnything() {
	if(sn==0) {
		//sound
		snAdd();
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
			select.play()
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
	canvasContext.drawImage(kevinimg,300,400,100,100);
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
		text("Snake",350,515,'white',17,true);
		text("Waluigi",450,515,'white',17,true);
		text("ALLEN",550,515,'white',17,true);
		text("Ling Ling",650,515,'white',17,true);
		text("Mr.Pottsible",450,715,'white',17,true);

}

