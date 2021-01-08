const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var divisionHeight = 300;
var division = [];
var plinkos = [];
var particles = [];
var plinko;
function setup(){
createCanvas(480,800);
engine = Engine.create();
world = engine.world;
ground = new Ground(400,800,900,10);
engine = Engine.create();
world = engine.world;
//for loop
for(var m = 0;m <=width; m = m + 70 ){
  division.push(new Division(m,height-divisionHeight/2,10,divisionHeight));
}
for(var j = 40; j <=width; j=j+50){
  plinkos.push(new Plinko(j,75,10))
}
for(var j=15; j<=width;j=j+50){
  plinkos.push(new Plinko(j,155,10))
}
for(var j=15; j<=width;j=j+50){
  plinkos.push(new Plinko(j,315,10))
}
for(var j=40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,235,10))
}
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1300,
    height: 600,
    wireframes: false
  }
})

	Engine.run(engine);
  
}
function draw(){
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  
  if(frameCount%50 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
 
  
// display
  for(var k=0;k<division.length;k++){
    division[k].display();
  }
  for(var p=0;p<plinkos.length;p++){
   plinkos[p].display();
  }
  for(var l=0;l<particles.length;l++){
    particles[l].display();
   // console.log(particles[l].pos.x)
    }
    
  drawSprites();
  
  
}