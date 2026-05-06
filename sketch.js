var lx = 180, ly = 300;
var lvx = 10, lvy = 10;
var lanterna;
//variaveis bala
var balax = lx + 25, balay = ly - 14;

function preload() {
  lanternaimg = loadImage("lanterna.png");
}

function setup() {
  frameRate(30);
  createCanvas(400, 400);
  var bA = false;
}

function draw() {
  background(0, 100, 100);
  drawlanterna();
  bala();
}

function drawlanterna() {
  image(lanternaimg, lx, ly, 70, 70);
  if (keyIsDown(LEFT_ARROW) && (lx > 0)) { lx -= lvx; }
  if (keyIsDown(RIGHT_ARROW) && (lx < 400 - 70) ) { lx += lvx; }
}

function bala(){
  fill(255, 255, 0);
  rect(balax, balay, 20, 30);
  balay -= lvy;
  if (keyIsDown(UP_ARROW)) {
    balax = lx + 25;
    balay = ly - 14;
  }
}




