//assignment 3-1, Tyler Edwards
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  translate(-170, 0);
  drawSprite(mouseX, 130); //moves the sprite with the mouse
}

function drawSprite(x, y) { //used to create the sprite
  translate(x, y);
  fill("plum");
  ellipse(200, 200, 50);
  fill("white");
  push();
  translate(165, 185);
  rotate(150);
  scale(0.3);
  strokeWeight(5);
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI, OPEN); //makes the first eye
  pop();
  push();
  translate(200, 170);
  scale(0.3);
  strokeWeight(5);
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI, OPEN); //makes the second eye
  fill("black");
  ellipse(-40, 56, 40);
  ellipse(40, 56, 40);
  pop();
}
