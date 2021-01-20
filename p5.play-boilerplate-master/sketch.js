//Name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,box;

function setup() {
  createCanvas(800,400);
  //creating engine
  engine = Engine.create();
   //creating world
   world = engine.world;

  
   box =  Bodies.rectangle(400,100,50,50)
  //Adding phy obj to main world
   World.add(world,box);
  console.log(box)
}

function draw() {
  background(0);  
 
  Engine.update(engine);
  rect (box.position.x , box.position.y , 50 ,50 )

}