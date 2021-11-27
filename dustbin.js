class Dustbin{
    constructor(x,y,w,h){
        var option={
            isStatic:true
        }
        this.image= loadImage("dustbin.png")
        this.x = x
        this.y=y
        this.w=w
        this.h = h
        this.body = Bodies.rectangle(x,y,w,h,option)
        World.add(world, this.body)
    }
    display(){
        var bustPos = this.body.position
        push()
        translate(bustPos.x, bustPos.y);
        imageMode(CENTER);
        image(this.image, 0,0, this.w, this.h);
        pop()
    }
}