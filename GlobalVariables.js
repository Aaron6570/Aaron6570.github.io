var fps = 30;

var sn = 0;

var cWidth;
var cHeight;

const ROWS = 9;
const COLS = 9;
const SPACE = 5;
var grid = [0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,
			0,1,1,1,1,1,1,1,0,
			0,0,0,0,0,0,0,0,0,
			0,0,1,1,1,1,1,0,0,
			0,0,0,0,0,0,0,0,0,
			0,0,0,0,1,0,0,0,0,
			0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0];
const GRID_X = 100;
const GRID_Y = 100;

var mouseGridX
var mouseGridY

var mouseX;
var mouseY;
var mouseIndex;

var character;


var tylerimg;
var raymonimg;
var tonyimg;
var michealimg;
var moisesimg;
var matthewimg;
var aaronimg;
var ricardoimg;
var kevinimg;
var adrianimg;
var allenimg;
var maximg;
var joshimg;
var cummingsimg;
var roblesimg;

var select = new Audio("select.wav");
var hit = new Audio("Hit.wav");
var powerup = new Audio("powerup.wav");

var pauseWait;

var playerX;
var playerVx = 0;
var playerAx = 1;

var playerY = 9500;
var playerVy = 1;
var boostA = 0.1;
var boostAmount = 600
var boosting = false;
var boostLim = 2;
var hasBoosted = false;

var heldLeft = false;
var heldRight = false;

var friction = 0.5;

var start = 0;

var miles = 0;
var time = 0;
var timeFinal = 0;
var finished = false;

var mouseDebugEnabled = false;


