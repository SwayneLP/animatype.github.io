let font;
let font2;
let font3;
let font4;
let points = [];
let xMouse, yMouse;
let fValue = 220;
let sValue = 220;
let sAlpha = 0;
var textSlider;
var textSizeValue = 200;
let canToggleColor = true;
let shape;
let dotFont;
let backgroundColor = '#1406dc';
let textColor = '#ccc';
let textColorPicker;
let backgroundColorPicker;
var pas = 0.1;


///CHargement des fontes
function preload() {
  font = loadFont('fonts/Antique-Olive-Std-Black.ttf');
  font2 = loadFont('fonts/Ballet-Regular-VariableFont_opsz.ttf');
  font3 = loadFont('fonts/JALLEAU.ttf');
  font4 = loadFont('fonts/ClashDisplay-Variable.ttf');
}

let input;
///Intéraction de scrolling souris pour changer le pas des points
function mouseWheel(event) {
  event.delta < 0 ? pas = min(pas + 0.01, 1) : pas = max(pas - 0.01, 0.01);
  updateText();
  return false;
}
///update de texte slider de changement de taille
function updateText() {
  if (!input || !textSlider || !dotFont) return;
  textAlign(CENTER, CENTER);
  textSizeValue = textSlider.value();
  points = dotFont.textToPoints(input.value(), 0, 0, textSizeValue, {
    sampleFactor: pas, simplifyThreshold: 0
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
///Changement des couleurs
    textColorPicker = createColorPicker(textColor);
    textColorPicker.addClass('color-picker');
    textColorPicker.position(450, 10);
    textColorPicker.style('width', '24px');
    textColorPicker.style('height', '24px');
    textColorPicker.style('padding', '0px');
    textColorPicker.style('background-color', 'transparent');

    bgColorPicker = createColorPicker(backgroundColor);
    bgColorPicker.addClass('color-picker');
    bgColorPicker.position(450, 40);
    bgColorPicker.style('width', '24px');
    bgColorPicker.style('height', '24px');
    bgColorPicker.style('padding', '0px');
    bgColorPicker.style('background-color', 'transparent');  


  shape = rect;
  dotFont = font;
/// Slider taille de texte
  textSlider = createSlider(12, 200, 200);
  textSlider.style('width', '25vw');
  textSlider.position(width - textSlider.width - 30, 72);
  textSlider.addClass('slider');
  
/// Input de texte
  input = createInput('Try me baby !');
  input.style('font-size', '24px');
  input.style('font-family', 'FlorDeRuina, sans-serif');
  input.style('width', '25vw');
  input.style('color', textColor);
  input.style('text-align', 'center');
  input.style('border', `2px solid ${textColor}`);
  input.style('background-color', 'transparent');
  input.position(width - input.width - 32, 16);

  input.input(updateText);

  textSlider.input(updateText);

  // Bouton de changement de font
  let fontButton = createButton('Change Font');
    fontButton.addClass('button');
    fontButton.width = 200;
    fontButton.position(10, 10);
    fontButton.style('font-size', '18px');
    fontButton.style('font-family', 'FlorDeRuina, sans-serif');
    fontButton.style('text-transform', 'uppercase');
    fontButton.style('letter-spacing', '1px');
    fontButton.style('color', textColor);
    fontButton.style('border', `2px solid transparent`);
    fontButton.style('background-color', 'transparent');
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


  /// Bouton de changement de forme
  let shapeButton = createButton('Change Shape');
    shapeButton.addClass('button');
    shapeButton.position(10, fontButton.y + fontButton.height + 10);
    shapeButton.style('font-size', '18px');
    shapeButton.style('font-family', 'FlorDeRuina, sans-serif');
    shapeButton.style('text-transform', 'uppercase');
    shapeButton.style('letter-spacing', '1px');
    shapeButton.style('color', textColor);
    shapeButton.style('border', `2px solid transparent`);
    shapeButton.style('background-color', 'transparent');
    shapeButton.mousePressed(() => {
      if (shape === rect) {
        shape = ellipse;
      } else {
        shape = rect;
      }
      updateText();});


  // Texte de changement de couleur de texte (C'était un boutton avant je dois changer ça)
  let textColorButton = createButton('Text Color');
    textColorButton.addClass('button');
    textColorButton.position(fontButton.x + fontButton.width + 10, 10);
    textColorButton.style('font-size', '18px');
    textColorButton.style('font-family', 'FlorDeRuina, sans-serif');
    textColorButton.style('text-transform', 'uppercase');
    textColorButton.style('letter-spacing', '1px');
    textColorButton.style('color', textColor);
    textColorButton.style('border', `2px solid transparent`);
    textColorButton.style('background-color', 'transparent');


  /// Texte de changement de couleur de fond (C'était un boutton avant je dois changer ça)
  let backgroundButton = createButton('Change Background');
    backgroundButton.addClass('button');
    backgroundButton.position(fontButton.x + fontButton.width + 10, fontButton.y + fontButton.height + 10);
    backgroundButton.style('font-size', '18px');
    backgroundButton.style('font-family', 'FlorDeRuina, sans-serif');
    backgroundButton.style('text-transform', 'uppercase');
    backgroundButton.style('letter-spacing', '1px');
    backgroundButton.style('color', textColor);
    backgroundButton.style('border', `2px solid transparent`);
    backgroundButton.style('background-color', 'transparent');

///Création des points sur le chamin du texte
  textAlign(CENTER, CENTER);
  textSize(textSizeValue);
  points = dotFont.textToPoints(input.value(), 0, 0, textSizeValue, {
    sampleFactor: pas, simplifyThreshold: 0
  });
}

function draw() {
  background(backgroundColor);

  /// Changement de couleur de fond du texte avec la barre espace
  backgroundColor = bgColorPicker.color();
  sValue=textColorPicker.color();
  if (keyIsDown(32)) {
    if (canToggleColor) {
      fValue = fValue === 220 ? backgroundColor : 220;
      canToggleColor = false;
    }
  } else {
    canToggleColor = true;
  }

  ///Changement de taille homotétique avec LShift
  for (let i=0; i<points.length; i++){
  fill(fValue); 
  stroke(sValue);
  strokeWeight(2);
  xMouse = mouseX - width/2;
  yMouse = mouseY - height/2;
  rectMode(CENTER);
      if (keyIsDown(16) === true) {
      shape(points[i].x, points[i].y, xMouse*0.1, xMouse*0.1);
    } else {
        shape(points[i].x, points[i].y, xMouse*0.1, yMouse*0.1);
    }
}

}

///CHangement de taille dynamique, début de responsive
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}