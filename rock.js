class Rock{
    constructor(x,y,width,height){
        this.image = loadImage("images/rock1.png");
        this.body =  Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);
    }
}