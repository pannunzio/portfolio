let message = 'tickle',
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 60,
  x,
  y; // x and y coordinates of the text

function preload() {
  font = loadFont('fonts/Roboto-Regular.ttf');
}

function setup() {
 var cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('tester');
  // set up the font
  textFont(font);
  textSize(fontsize);

  // get the width and height of the text so we can center it initially
  bounds.x = 0;
  bounds.y = 0;
  bounds.w = 350;
  bounds.h = 350;//font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
}

function draw() {
  background(204, 120);

  // write the text in black and get its bounding box
  fill(0);
  text(message, x, y);
  rect(x, y, bounds.w, bounds.h)

  //bounds =  font.textBounds(message, x, y, fontsize);

  // check if the mouse is inside the bounding box and tickle if so
  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    x += random(-5, 5);
    y += random(-5, 5);
  }
}