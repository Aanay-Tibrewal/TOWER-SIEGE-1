const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

//var ground;
//var block1, block2, block3, block4, block5, block6, block7, block8, block9;

function preload(){

}

function setup(){
    var canvas = createCanvas(1000,400);
     engine = Engine.create();
     world = engine.world;
     Engine.run(engine);

    ground = new Ground(300,400,displayWidth,10);

    block1 = new Block(200,330,30,30);
    block2 = new Block(231,330,30,30);
    block3 = new Block(262,330,30,30);
    block4 = new Block(293,330,30,30);
    block5 = new Block(215,300,30,30);
    block6 = new Block(246,300,30,30);
    block7 = new Block(277,300,30,30);
    block8 = new Block(231,270,30,30);
    block9 = new Block(262,270,30,30);
    block10 = new Block(246,240,30,30);
    
}

function draw(){
    background("red");
    
    ground.display();

   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
   block10.display();


}
