//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var obj;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var options = {
    isStatic: true
  }
  obj = Bodies.rectangle(100, 200, 50, 50, options);
  World.add(myWorld, obj);

  console.log(obj);
  console.log(obj.position.x);
  console.log(obj.position.y);
  
}

function draw() {
  background(0);  
  Engine.update(myEngine);
  rectMode(CENTER);
  fill("green");
  rect(obj.position.x, obj.position.y, 50, 50);
}