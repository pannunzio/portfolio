var randX1, randX2, randX3;
var randY1, randY2, randY3;
var randZ1, randZ2, randZ3;

function setup() {
	var cnv = createCanvas(windowWidth-10, windowHeight, WEBGL);
	cnv.parent('tester');

	noFill(); 
 	stroke(255); 
  
 	randX2 = random(-1, 1) * (windowWidth / (random(2, 5)));
	randX1 = random(-1, 1) * (windowWidth / (random(2, 5)));
	randX3 = random(-1, 1) * (windowWidth / (random(2, 5)));
	randY1 = random(-1, 1) * (windowHeight / (random(2, 5)));
	randY2 = random(-1, 1) * (windowHeight / (random(2, 5)));
	randY3 = random(-1, 1) * (windowHeight / (random(2, 5)));
	randZ1 = random(-1, 1) * (random(-10, 10));
	randZ2 = random(-1, 1) * (random(-10, 10));
	randZ3 = random(-1, 1) * (random(-10, 10));
}

function draw() {	
	clear();
	push();
		translate(randX1, randY1, randZ1);
		rotateX(frameCount * 0.01);
		rotateY(frameCount * 0.01);
		box(50);
  	pop();

	push();
		translate(randX2, randY2, randZ2);
		rotate(frameCount * 0.01);
		rotateY(frameCount * 0.01);
		box(25);
  	pop();

	push();
		translate(randX3, randY3, randZ3);
		rotate(frameCount * 0.005);
		rotateY(frameCount * 0.01);
		box(100);
  	pop();
}