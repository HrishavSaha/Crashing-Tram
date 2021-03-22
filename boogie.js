class Boogie{
    constructor(x,y,width,height){
        var options ={
            isStatic: false
        }
        
        this.image = loadImage("images/coach.png");
        //this.image.scale = 0.1;
        this.body =  Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        Matter.Body.setMass(this.body,this.body.mass*5);
        this.width = width;
        this.height = height;
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);
        //rectMode(CENTER);
        //fill("white");
        //rect(pos.x,pos.y,this.width,this.height);
    }
}