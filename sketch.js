const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,ground;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  ground = new Ground(240,780,480,20);

  var particle = [];
  var plinkos =[];
  var division = [];
  var divisionHeight = 300;

}

function draw() {
  background(255,255,255);  
  drawSprites();
 ground.display();
  
 for(var j = 0; j < particle.length; j++){
  particle[j].display();
}
for(var k = 0; k < division.length; k++){
 division[k].display();
}
for(var b = 0; b < plinkos.length; b++){
  plinkos[b].display();
 }
}
for(var k = 0; k<= width; k=k+80){
 
division.push(new Division(k,height.divisionHeight/2,10,divisionHeight));
}

for (var j = 40; j <= width; j = j+50){
  plinkos.push(new Plinko(j,75));
}
for (var j = 15; j <= width-10; j = j+50){
  plinkos.push(new Plinko(j,175));
}

