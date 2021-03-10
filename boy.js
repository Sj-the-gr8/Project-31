class Boy  {
    constructor(x,y,r)  {
        this.r=r;
        this.body=Matter.Bodies.circle(x,y,this.r,{isStatic:true});
        Matter.World.add(myWorld,this.body);
        this.boy=createSprite(200,295);
        this.boy.addAnimation("walk",boyA);
        this.boy.scale=0.3;
    }
    display()   {
        drawSprites();
    }
}