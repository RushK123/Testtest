
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball, ballOptions;
var ground;
var angle = 60;
var poly, wedge;


function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;



  var ground_options = {
    isStatic: true
  };

  ballOptions = {
    restitution : 1 
  };

  var wedgeOptions = {
    isStatic : true
  };

  wedge = Bodies.rectangle(100,200,100,20, wedgeOptions)
  World.add(world,wedge);

  ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
  World.add(world, ground);

  ball = Bodies.circle(200,150,40, ballOptions);
  World.add(world, ball);



  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background(51);
  Engine.update(engine);
  Matter.Body.rotate(wedge,angle);
  push();
  translate(wedge.position.x, wedge.position.y);
  rotate(angle);
  rect(0, 0, 100,20);
  pop();
  angle += 0.1;
  ellipse(ball.position.x, ball.position.y, 40);
  rect(ground.position.x, ground.position.y, 400, 20);
}

