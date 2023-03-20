// Tyler Edwards, assignment 3, challenge 3
function setup() {
  createCanvas(400, 400);
  paperX = random(400); //variables used to control where the paper sprite appears on the X and Y plain, as well as it's speed
  speed = 5;
  paperY = 0;
}

function draw() {
  background(220);
  push();
  drawPaper(paperX, paperY); //creates the falling paper sprite
  pop();
  translate(-170, 0);
  drawSprite(mouseX, 130); //used to move on the X axis with the mouse
  paperY = paperY + speed; //used to set the paper's falling speed
}
function drawPaper(x, y) {
  //function used to draw the falling sprite
  translate(x, y);
  rect(20, 20, 25, 30);
  beginShape();
  vertex(22, 25);
  vertex(43, 25);
  endShape();
  beginShape();
  vertex(22, 35);
  vertex(43, 35);
  endShape();
  beginShape();
  vertex(27, 45);
  vertex(36, 45);
  endShape();
  translate(-170, 0);
  paperY = paperY + speed;
}
function drawSprite(x, y) {
  //function used to draw the sprite
  push();
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
  if (mouseIsPressed) {
    //function used to change on mouse press
    noFill();
    rotate(1.06);
    arc(300, -80, 20, 20, -10, PI + QUARTER_PI, OPEN);
    pop();
  }
}
