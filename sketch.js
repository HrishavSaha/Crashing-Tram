const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rock;

var boogie=[];
var chain=[];
var x = 100;
var n1 = 0;
var n2 = 1;

var bg;

var crash;
var flag;

var gameState = "onSling";
//var bg = "sprites/bg1.png";

var score = 0;
function preload() {
//    getTime();
crash = loadSound("sound/train_crossing.mp3");
bg = loadImage("images/bg.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    for(i = 0; i<6; i++){
        boogie.push(new Boogie(x,300,60,30));
        x = x + 100;
    }

    for(i = 0;i<5;i++){
        chain.push(new Chain(boogie[n1].body,boogie[n2].body));
        n1 = n2;
        n2 = n2+1;
    }

    rock = new Rock(1050,200,300,150);
    //platform = new Ground(150, 305, 300, 170);

    //box1 = new Box(700,320,70,70);
    //box2 = new Box(920,320,70,70);
    //pig1 = new Pig(810, 350);
    //log1 = new Log(810,260,300, PI/2);

    //box3 = new Box(700,240,70,70);
    //box4 = new Box(920,240,70,70);
    //pig3 = new Pig(810, 220);

    //log3 =  new Log(810,180,300, PI/2);

    //box5 = new Box(810,160,70,70);
    //log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    //bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    //slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    //if(backgroundImg)
        background(bg);
    

        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
        
    Engine.update(engine);
    //strokeWeight(4);
    //box1.display();
    //box2.display();
    ground.display();

    var collision = Matter.SAT.collides(boogie[5].body,rock.body);

    if(collision.collided){
        flag = 1;
    }

    if(flag === 1){
        text("CRASHED!!!", 500,200);
        crash.play();
        flag = 0;
    }

    for(i=0;i<chain.length;i++){
        chain[i].display();
    }

    for(i=0;i<boogie.length;i++){
        boogie[i].display();
    }

    rock.display();

    //pig1.display();
    //pig1.score();
    //log1.display();

    //box3.display();
    //box4.display();
    //pig3.display();
    //pig3.score();
    //log3.display();

    //box5.display();
    //log4.display();
    //log5.display();

    //bird.display();
    //platform.display();
    //log6.display();
    //slingshot.display();    
}

//function mouseDragged(){
//    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
//}

//function mouseReleased(){
//    slingshot.fly();
//}

function keyPressed(){
    if(keyCode ===  RIGHT_ARROW){
       Matter.Body.applyForce(boogie[5].body,{x:boogie[5].body.position.x, y:boogie[5].body.position.y},{x:2,y:0});
    }
}


//async function getTime(){
//    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
//    var responseJSON = await response.json();
//console.log(responseJSON)
//    var datetime = responseJSON.datetime;
//    var hour = datetime.slice(8,10);
//    console.log(datetime);
//    console.log(hour);
//    if(hour>=06 && hour<=19){
//        bg = "sprites/bg1.png";
//    }
//    else{
//        bg = "sprites/bg2.jpg";
//    }
//
//    backgroundImg = loadImage(bg);
//}
