const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundObj,leftSide,rightSide;
var world;
var radius = 70;
var dustbin
var ball;
function preload(){

	//dustbinImg = addImage("dustbin.png");
	//paperImg = addImage("paper.png");

}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//var ball_options={
	//	isStatic:false,
	//	restitution:0.3,
		//density:0.4
	//}

	//ball = Bodies.circle(260,100,radius/2.6,ball_options);
	//World.add(world,ball);

	ground=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,10,120);
	rightSide = new Ground(1270,600,10,120);
	bottomSide = new Ground(1185,650,150,20);
	ball = new Ball(260,100,100);
	dustbin = new Dustbin(1235,525,300,300);
	Engine.run(engine);
  
}


function draw() {
	background(200);
	rectMode(CENTER);


	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();
	ball.display()
	dustbin.display()


	
//imageMode(CENTER);
//image(ball.position.x,ball.position.y,radius,radius);
//image(1185, 570, 200,200);
	

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-100});
    
  	}
}
