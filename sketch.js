
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1= new Bob(400,670,10);
	bob2= new Bob(380,670,10);
	bob3= new Bob(420,670,10);
	bob4= new Bob(440,670,10);
	bob5= new Bob(360,670,10);
	roof = new Ground(400,200,50,10);
	rope1=new rope(bob1.body,roof.body,bobDiameter*2,0);
	rope2=new rope(bob2.body,roof.body,bob2Diameter*2,0);
	rope3=new rope(bob3.body,roof.body,bob3Diameter*2,0);
	rope4=new rope(bob4.body,roof.body,bob4Diameter*2,0);
	rope5=new rope(bob5.body,roof.body,bob5Diameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  
 drawSprites();

}



