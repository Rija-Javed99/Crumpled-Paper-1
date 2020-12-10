
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	//Create a Ground, paper, dustbin objects
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 //display objects
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	//add code
  	}
}





