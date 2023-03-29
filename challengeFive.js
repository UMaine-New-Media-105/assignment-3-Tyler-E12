//challenge 3-5 Tyler Edwards
let paperRadius = 15; // radius of the drawPaper sprite
let collided = false; // flag to check if there is a collision

function setup() {
  createCanvas(400, 400);
  paperX = random(400);
  speed = 5;
  paperY = -170;
}

function draw() {
  background("lightgoldenrodyellow"); //creates the divorce office room
  fill("brown");
  beginShape();
  vertex(100, 300);
  vertex(300, 300);
  vertex(400, 400);
  vertex(0, 400);
  vertex(100, 300);
  endShape();
  beginShape(LINES);
  vertex(100, 0);
  vertex(100, 300);
  vertex(300, 0);
  vertex(300, 300);
  endShape();
  fill("white");
  push();
  if (mouseIsPressed) {
    drawPaper(paperX, paperY);

    // calculates the distance between center points of the drawPaper and drawSprite sprites
    let distance = dist(paperX, paperY, mouseX, 260);

    // checks for collision
    if (distance < paperRadius + 25) {
      // the radius of the drawSprite sprite is 25
      collided = true; // this makes collided become true
      paperY = -170; // this resets the paperY variable to the top of the canvas
      paperX = random(400);
    }

    if (paperY > height + 50) {
      paperY = -170;
      let minX = 0;
      let maxX = width - 25;
      paperX = random(minX, maxX);
    }
  }
  pop();
  translate(-170, 0);
  drawSprite(mouseX, 130);
  paperY = paperY + speed;

  if (collided == true) {
    //this is what makes him frown when he collects a divorce paper
    noFill();
    rotate(1.06);
    arc(300, -80, 20, 20, -10, PI + QUARTER_PI, OPEN);
    pop();
  } else {
  }
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
}
