
function setup() {
 var cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('tester');
}

function draw() {
  clear();
  // write the text in black and get its bounding box
  fill(0);
  rect(mouseX, mouseY, 50, 50);

  //bounds =  font.textBounds(message, x, y, fontsize);

  // check if the mouse is inside the bounding box and tickle if so
}