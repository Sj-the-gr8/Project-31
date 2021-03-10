class Drops  {
    constructor(x,y)  {
        this.body=Matter.Bodies.circle(x,y,3,{friction:0.1});
        Matter.World.add(myWorld,this.body);
    }
    display()   {
        if(this.body.position.y>=425)   {
            Matter.Body.setPosition(this.body,{x: random(0,400),y: random(-100,0)});
        }
        fill("blue");
        ellipse(this.body.position.x,this.body.position.y,10,10);
    }
}