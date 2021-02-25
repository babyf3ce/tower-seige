const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
function preload() {}

function setup() {
  var canvas = createCanvas(1000, 400);
  engine = Engine.create();
  world = engine.world;

  polygon = new Polygon(100, 200, 25, 25);
  ground1 = new Ground(480, 300, 250, 20);
  ground2 = new Ground(700, 250, 100, 10);
  //left boxes
  box1 = new Box(500, 290, 60, 70);
  box2 = new Box(480, 290, 60, 70);
  box3 = new Box(520, 290, 60, 70);
  box4 = new Box(460, 290, 60, 70);
  box5 = new Box(550, 150, 60, 70);
  box6 = new Box(490, 150, 60, 70);
  box7 = new Box(420, 120, 60, 70);
  //right boxes
  box8 = new Box(680, 120, 60, 70);
  box9 = new Box(660, 120, 60, 70);
  box10 = new Box(700, 120, 60, 70);
  box11 = new Box(620, 110, 60, 70);

  sling = new Slingshot(polygon, { x: 215, y: 250 });
}

function draw() {
  background("gray");
  Engine.update(engine);
  polygon.display();
  ground1.display();
  ground2.display();
  sling.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  sling.fly();
}
function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(polygon.body, { x: 215, y: 250 });
  }
}
