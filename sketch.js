
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbinB, dustbinL, dustbinR;
var dustbin;


function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100, 100, 70);
	World.add(world, paper);

	ground = new Ground(width/2, 575, width, 50);
	World.add(world, ground);

	dustbin = new Dustbin();
	World.add(world, dustbin);

	/*dustbinB = new DustbinBottom(200, 230);
	World.add(world, dustbinB);

	dustbinL = new DustbinLeftSide(20, 220);
	World.add(world, dustbinL);

	dustbinR = new DustbinRightSide(20, 220);
	World.add(world, dustbinR);*/

	Engine.run(engine);

	console.log(paper);
  
}


function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background(200, 200, 200);

  fill("black");
  textSize(20);
  text("We don't want to live in a dustbin, so stop making our earth one!", 85, 180);

  ground.display();
  paper.display();

  dustbin.display();
  
  /*
  dustbinL.display();
  dustbinR.display();
  dustbinB.display();
 */

  if(paper.body.position.x > 530){
	  fill(0);
	  textSize(45);
	  text("Good Job!", 290, 250);
  }

//  keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 99, y: -107});
	}
}

