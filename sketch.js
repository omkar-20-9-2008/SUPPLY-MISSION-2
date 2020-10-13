var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rect1,rect2,rect3
var sp1,sp2,sp3

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	var packageBody_options ={  
		restitution:0.45,
		isStatic:true
	}

	packageSprite=createSprite(100, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	sp1 = createSprite(width/2,height-50,200,20);
	sp1.shapeColor="red";

	sp2 = createSprite(290,610,20,100);
	sp2.shapeColor="red";

	sp3 = createSprite(510,610,20,100);
	sp3.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 ,packageBody_options);
	World.add(world, packageBody);

	rect1 = Bodies.rectangle(width/2,height-50,200,20, {isStatic:true} );
	World.add(world, rect1);

	rect2 = Bodies.rectangle(290,500,20,100);
	World.add(world, rect2);

	rect3 = Bodies.rectangle(510,500,20,100);
	World.add(world, rect3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  rect1.position.x=sp1.x
  rect1.position.y=sp1.y
 
  rect2.position.x=sp2.x
  rect2.position.y=sp2.y
 
  rect3.position.x=sp3.x
  rect3.position.y=sp3.y
 
 drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false)

  }
}


