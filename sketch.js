const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;
var trashcan;
var paper;


function setup() {
	var canvas = createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(1600/2,670,1600,20);

    /*trashcan1 = new Trashcan(850,275,30,150);
	trashcan2 = new Trashcan(950,365,200,30);
  trashcan3 = new Trashcan(1050,275,30,150);*/
  
  trashcan = new Trashcan(1200,650);

	paper = new Paper(200,450,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  trashcan.display();
  paper.display();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
  }
}


