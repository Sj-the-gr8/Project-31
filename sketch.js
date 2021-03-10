var myEngine,myWorld,a,b,boy,boyA,t,tA,sound;

function preload()  {
    boyA=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
    tA=loadAnimation("1.png","2.png","3.png","4.png");
}

function setup()   {
    createCanvas(400,400);
    myEngine=Matter.Engine.create();
    myWorld=myEngine.world;
    b=[];
    for(var i=1;i<=100;i++)  {
        a=new Drops(random(0,400),random(-height,100));
        b.push([a]);
    }
    boy=new Boy(210,270,70);
    t=createSprite(350,100);
    t.addAnimation("thunder",tA);
    t.scale=0.3;
}

function draw()  {
    background(0);
    Matter.Engine.update(myEngine);  
    boy.display();
    for(var i=0;i<b.length;i++)   { 
        b[i][0].display();
    }
    drawSprites();
}