
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box1,box2,box3;
var ball;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;
  
  ground = new Ground(600,590,1200,20);

  box1 = new Box(800,580,150,20);
  box2 = new Box(715,550,20,100);
  box3 = new Box(885,550,20,100);
  
  ball = new Ball(100,580);

	Engine.run(engine);
  
}


function draw() {
  
  Engine.update(engine);

  rectMode(CENTER);
  background(0);
  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  
  drawSprites();
 
}

function keyPressed(){
   if(keyCode === RIGHT_ARROW){
     Matter.Body.applyForce(ball.body,ball.body.position,{x:50 , y:-100})
   }
   if(keyCode === LEFT_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:-30 , y:-100})
  }
}

