let font;
let font2;
let font3;
let font4;
let points = [];
let xMouse, yMouse;
let fValue = 220;
let sValue = 0;
let sAlpha = 0;
var textSlider;
var textSizeValue = 200;

function preload() {
  font = loadFont('fonts/Antique-Olive-Std-Black.ttf');
  font2 = loadFont('fonts/Ballet-Regular-VariableFont_opsz.ttf');
  font3 = loadFont('fonts/JALLEAU.ttf');
  font4 = loadFont('fonts/ClashDisplay-Variable.ttf');
}


/// ajouter une zone de texte pour récupérer le texte à afficher
let input;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  var dotFont = font;

  textSlider = createSlider(12, 200, 200);
  textSlider.style('width', '50vw');
  textSlider.position(width/2 - textSlider.width/2, height-150);
  textSlider.addClass('slider');
  

  input = createInput('Try me baby !');
  input.style('font-size', '24px');
  input.style('font-family', 'Clash Display, sans-serif');
  input.style('font-weight', '600');
  input.style('width', '50vw');
  input.style('color', '#ccc');
  input.style('padding', '8px');
  input.style('text-align', 'center');
  input.style('border', '2px solid #ccc');
  input.style('border-radius', '24px');
  input.style('background-color', 'black');
  input.position(width/2 - input.width/2, height-100);

  input.input(updateText);

  textSlider.input(updateText);

  let fontButton = createButton('Change Font');
    fontButton.addClass('font-button');
    fontButton.style('width', '150px');
    fontButton.position(width/2 - fontButton.width/2, height - height + 50);
    fontButton.style('font-size', '18px');
    fontButton.style('font-family', 'Clash Display, sans-serif');
    fontButton.style('font-weight', '600');
    fontButton.style('color', '#ccc');
    fontButton.style('padding', '10px');
    fontButton.style('border', '2px, solid #ccc');
    fontButton.style('border-radius', '24px');
    fontButton.style('background-color', 'black');
    fontButton.mousePressed(() => {
  if (dotFont === font) {
    dotFont = font2;
  } else if (dotFont === font2) {
    dotFont = font3;
  } else {
    dotFont = font;
  }
  updateText();
});

  textAlign(CENTER, CENTER);
  textSize(textSizeValue);
  points = dotFont.textToPoints(input.value(), 0, 0, textSizeValue, {
    sampleFactor: 0.1, simplifyThreshold: 0
  });

function updateText() {
  textSizeValue = textSlider.value();
  points = dotFont.textToPoints(input.value(), 0, 0, textSizeValue, {
    sampleFactor: 0.1, simplifyThreshold: 0
  });
}


}

function draw() {
  background(10);
  for (let i=0; i<points.length; i++){
  fill(fValue);
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
  if (fValue === 220) {
  fValue = (10)}
  else {
    fValue = (220);
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