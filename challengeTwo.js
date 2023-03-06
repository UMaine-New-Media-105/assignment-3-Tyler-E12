//assignment 3-2, Tyler Edwards
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  push()
  translate(-170, 0);
  drawSprite(mouseX, 130); //used to move on the X axis with the mouse
}

function drawSprite(x, y) { //function used to draw the sprite
  translate(x, y);
  fill("plum");
  ellipse(200, 200, 50);
  fill("white");
  push();
  translate(165, 185);
  rotate(150);
  scale(0.3);
  strokeWeight(5);
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI, OPEN);
  pop();
  push();
  translate(200, 170);
  scale(0.3);
  strokeWeight(5);
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI, OPEN);
  fill("black");
  ellipse(-40, 56, 40);
  ellipse(40, 56, 40);
  pop();
  if (mouseIsPressed){ //function used to change on mouse press
  noFill()
  rotate(1.06)
  arc(300, -80, 20, 20, -10, PI + QUARTER_PI, OPEN)
  }
  
}
