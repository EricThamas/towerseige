const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;

function setup(){
    createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,280,350,20);
    ground2 = new Ground(1000,170,320,20);
    box1 = new Box(472,270,38,38);
    box2 = new Box(511,270,38,38);
    box3 = new Box(568,270,38,38);
    box4 = new Box(599,270,38,38);
    box5 = new Box(610,270,38,38);
    box6 = new Box(625,270,38,38);
    box7 = new Box(666,270,38,38);
    box8 = new Box(710,270,38,38);
    box9 = new Box(474,260,35,35);
    box10 = new Box(510,250,35,35);
    box11 = new Box(549,250,35,35);
    box12 = new Box(591,250,35,35);
    box13 = new Box(602,250,35,35);
    box14 = new Box(612,250,35,35);
    box15 = new Box(685,250,35,35);
    box16 = new Box(484,230,35,35);
   
}

function draw(){
    background("black");
    Engine.update(engine);

    ground1.display();
    ground2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
}
