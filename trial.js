var boyA,tA,b;

function preload()  {
    boyA=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
    tA=loadAnimation("1.png","2.png","3.png","4.png");
}

function setup()  {
    createCanvas(400,400);
    b=createSprite();
    b.addAnimation("walk",boyA);
}

function draw()  {
    background(255);
    drawSprites();
}