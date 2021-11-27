class Ball{
    constructor(x,y,r){
        var option={
            isStatic:false,
	        restitution:0.3,
		    density:0.4    
        }
        this.image= loadImage("paper.png");
        this.y = y
        this.x = x
        this.r =r
        this. body = Bodies.circle(x,y,r,option)
        World.add(world, this.body);
    }

    display(){
        var ballpos = this.body.position
        var ballang = this.body.angle
        push()
        translate(ballpos.x, ballpos.y);
        rotate(ballang);
        imageMode(CENTER);
        image(this.image, 0,0 , this.r,this.r);
        pop()
    }
}