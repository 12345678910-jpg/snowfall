const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var bg1;
var snowfall = [];
function preload(){
  bg1 = loadImage("snow1.jpg")

}
function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
}

function draw() {
  background(bg1); 
  Engine.update(engine) 

  if(frameCount%5 === 0){
    snowfall.push(new Snowfall(random(1, 800), 10, 30))
  }

  for(var j = 0;j<snowfall.length;j++){
    snowfall[j].display();
  }
  drawSprites();
}
