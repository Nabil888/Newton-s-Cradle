
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
var frame;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	
	ball1 = new Ball(360,650,10);
	ball2 = new Ball(480,650,10);
	ball3 = new Ball(600,650,10);
	ball4 = new Ball(720,650,10);
	ball5 = new Ball(840,650,10);

	frame = new Frame();

	rope1 = new Rope(ball1.ball,{x:360,y: 180});
	rope2 = new Rope(ball2.ball,{x:480,y:180});
	rope3 = new Rope(ball3.ball,{x:600,y:180});
	rope4 = new Rope(ball4.ball,{x:720,y:180});
	rope5 = new Rope(ball5.ball,{x:840,y:180});
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
 
  frame.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  keyPressed();
  drawSprites();
}
function keyPressed(){
	if(keyDown(UP_ARROW)){
		Body.applyForce(ball1.ball,ball1.ball.position,{x:-270,y:-270})
	}
}


