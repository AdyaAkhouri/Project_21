
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ball_options, ground, ground_options;
var r_g, l_g;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball_options = {
	isStatic: false,
	restitution: 0.3,
	friction: 2,
	density: 0.2
	}
	ground_options = {
		isStatic: true,
	}


	ball = Bodies.circle(200,350, 30, ball_options);
	World.add(world, ball);

	ground = Bodies.rectangle(400,620,600,10, ground_options)
	World.add(world, ground)

	r_g = Bodies.rectangle(550,560,10,100, ground_options)
	World.add(world, r_g)	

	l_g = Bodies.rectangle(700,560,10,100, ground_options)
	World.add(world, l_g)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x, ball.position.y, ball.circleRadius);
  rect(ground.position.x, ground.position.y , 800, 20);
  rect(r_g.position.x, r_g.position.y, 10,100);
  rect(l_g.position.x, l_g.position.y, 10,100);
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x:30,y:-17})
	}
}

