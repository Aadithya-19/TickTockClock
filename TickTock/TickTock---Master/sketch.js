var Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var sc, mn, hr;

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(0);

  let hr = hour();
  text('Current hour:\n' + hr, 5, 50);

  let mn = minute();
  text('Current minute: \n' + mn, 5, 85);

  let sc = second();
  text('Current second: \n' + sc, 5, 120);


  scAngle = map(sc, 0, 60, 0, 360); // circle
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 60, 0, 360);

  translate(400, 200);
  rotate(-90);


  fill("black");
  stroke(rgb(255, 0, 0));
  strokeWeight(10);
  arc(0, 0, 330, 330, 0, scAngle);

  push();

  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(10);
  line(0, 0, 100, 0);  // For seconds line

  pop();





  // fill("black");
  stroke(rgb(0, 0, 255));
  strokeWeight(10);
  arc(0, 0, 300, 300, 0, mnAngle);


  push();

  rotate(mnAngle);
  stroke(rgb(0, 0, 255));
  strokeWeight(10);
  line(0, 0, 100, 0);  // For minutes line

  pop();

  // fill("black");
  stroke(rgb(0, 255, 0));
  strokeWeight(10);
  arc(0, 0, 270, 270, 0, hrAngle);




  push();

  rotate(hrAngle);
  stroke(rgb(0, 255, 0));
  strokeWeight(10);
  line(0, 0, 100, 0);  // For hours line

  pop();



  angle = angleMode(DEGREES);

  drawSprites();
}