let font;
let points = [];
let xMouse, yMouse;
let value = 220;
let sValue = 0;
let sAlpha = 0;

function preload() {
  font = loadFont('fonts/Antique-Olive-Std-Black.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  points = font.textToPoints('Try me baby', width/6, height/6*3.5, 200, {
    sampleFactor: 0.1, simplifyThreshold: 0
  });


  angleMode(DEGREES);
}

function draw() {
  background(10);
for (let i=0; i<points.length; i++){
  fill(value);
  stroke(sValue, sValue, sValue, sAlpha);
  xMouse = mouseX - width/2;
  yMouse = mouseY - height/2;
  ellipse(points[i].x, points[i].y, xMouse*0.1, yMouse*0.1);
  if (keyIsPressed === true) {
    if (keyCode === 16) {
      ellipse(points[i].x, points[i].y, xMouse*0.1, xMouse*0.1);
    }
  }
}
}

function mouseClicked(){
  if (value === 220) {
  value = (10)}
  else {
    value = (220);
  }
  if (sValue === 0) {
    sValue = (220)}
  else {
    sValue = (0);
  }
  if (sAlpha === 0) {
    sAlpha = (255)}
  else {
    sAlpha = (0);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}