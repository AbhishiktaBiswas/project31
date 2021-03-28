const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var drops = [];
var rand;
var Thunder, thunder1,thunder2,thunder3,thunder4;
var thunderCreatedFrame = 0;
var maxDrops = 100;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");

}

function setup(){
    engine = Engine.create();
    world = engine.world;
    var canvas = createCanvas(450,650);

    umbrella = new Umbrella(200,450);

    if(frameCount%150===0){
        for(var i = 0;i<maxDrops;i++)
        drops.push(new Drops(random(0,400),random(0,400)))
    }
}

function draw(){
    Engine.update(engine);
    background(0);

    rand = Math.round(random(1.4));
    if(frameCount%80 === 0){
        thunderCreatedFrame = frameCount;
        Thunder = CreateSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1 : Thunder.addImage(thunder1);
                break;
            case 2 : Thunder.addImage(thunder2);
                break;
            case 3 : Thunder.addImage(thunder3);
                break;
            case 4 : Thunder.addImage(thunder4);
                break;
            default:break;
        }
        Thunder.scale = random(0.3,0.6);
    }

    if(thunderCreatedFrame + 10 === frameCount && Thunder){
        Thunder.destroy();
    }

    umbrella.display();
    for(var i = 0; i < maxDrops; i++){
        drops[i].showDrop();
       // drops[i].updateY();
    }
    drawSprites();
}   

