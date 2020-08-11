const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var maxDrops = 100;
var Man;
var Rainfall = [];
var Raindrop;

function setup(){
   createCanvas(300, 500);

   engine = Engine.create();
   world = engine.world;

   Man = new Umbrella (150, 450, 75, 100);

   for(var i = 0; i < maxDrops; i++){
    Rainfall.push(new Rain(random(1, 300), random(1, 500), 5))
   }

}

function draw(){
    background("black");
    Engine.update(engine);
    Man.display();
    for (var a  = 0; a < Rainfall.length; a++){
        Rainfall[a].display();
    }
    for (var b  = 0; b < Rainfall.length; b++){
        Rainfall[b].update();
    }
}   

