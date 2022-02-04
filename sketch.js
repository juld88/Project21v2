
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var ball, Ground, left, right;
var radius = 40;

function preload()
{

}

function setup() {
	createCanvas(800, 700);

	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	var balls_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(300,20,10,balls_options);
	World.add(world, ball);
	//Create the Bodies Here.
	Ground = new ground(width/2, 670, width, 20);
	left = new ground(width/2+200, 600, 20, 2000);
	right = new ground(width/2, 600, 20, 120);
	Engine.run(engine);
  
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:8.5,y:-8.5});
	}	
}
function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,radius.radius);

  Ground.display();
  left.display();
  right.display();
}

