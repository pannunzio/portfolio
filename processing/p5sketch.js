
function setup() {
 var cnv = createCanvas(windowWidth-10, windowHeight, WEBGL);
  cnv.parent('tester');

}

function draw() {		
background(200);
noFill();
stroke(255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(50);
}