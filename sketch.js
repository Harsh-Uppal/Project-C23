const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
var d = false;
var pa = 10;
var helicopter,package;
var Image1,Image2;
function preload()
{
        Image1 = loadImage("helicopter.png");
        Image2 = loadImage("Package.png");
}
function setup() {

createCanvas(100,100);
    
    engine = Engine.create();
    world = engine.world;
        var i = {
            isStatic: true
        };
        package = Bodies.rectangle(100,100, 10,10,i);
        helicopter = Bodies.rectangle(200,200, 20,20,i);

        World.add(world, helicopter);
        World.add(world,package);
}

function draw() {
    Engine.update(engine);
    background(new rgb(200, 400, 800));
    image(Image2,10,pa,10,10);
    image(Image1,10,10,50,35);
rect(0,90,100,5);
    if(keyIsDown(DOWN_ARROW))
    {
   d = true;

    }
if(d&&pa<83)
{
pa++;
}
}
class BaseClass {
    constructor(x, y, Width, h, check,angle) {
        var i = {
            restitution: 0.8,
            isStatic: check,
            friction: .5
        };
        this.rect1 = Bodies.rectangle(x, y, Width * 20, h * 20, i);
        this.rect1.angle = angle;
        World.add(world, this.rect1);
    }
    display() {
        push();
        translate(this.rect1.position.x, this.rect1.position.y);
        rotate(this.rect1.angle);
        var rectD = rect(this.rect1.position.x, this.rect1.position.y, this.s * 20, this.s * 20);
        pop();
    }
}
class Box extends BaseClass{
    constructor(x,y,w,h,c) {

        super(x,y,w,h,c);
    }

    display() {

        super.display();
        
    }
}
class log {
    
    constructor(x, y, s, w, a) {
        var attributes = {
            isStatic: true
        };
        a = a * 60;
        if (w == "v") {
            this.rect1 = Bodies.rectangle(x, y, s * 15 / 3, s * 175 / 3,attributes);
        }
        else if (w == "h") {
            this.rect1 = Bodies.rectangle(x, y, s * 175 / 3, s * 15 / 3,attributes);
        }
        this.s = s;
        this.w = w;
        
        Matter.Body.setAngle(this.rect1, a);
        World.add(world, this.rect1);
    }
    display() {
        push();
        translate(this.rect1.position.x, this.rect1.position.y);
        rotate(this.rect1.angle);
        if (this.w == "h") {
            var rectD = rect(0, 0, this.s * 15, this.s * 175 / 3);
        }
        else if (this.w == "v") {
            var rectD = rect(0, 0, this.s * 175, this.s * 15 / 3);
        }
        else {
            Console.error("The fourth input of log can only be v or h");
        }
        
        pop();
    }
}
class Angry_bird {
    constructor(s) {
        var i = {
            isStatic: true
        };
        this.rect1 = Bodies.rectangle(mouseX, mouseY, s * 20, s * 20,i);
        this.s = s;
        this.Image = loadImage("r.jpg");
        World.add(world, this.rect1);
    }
    display()
    {
        this.rect1.position.x = mouseX;
        this.rect1.position.y = mouseY;



    }
}
class Pig {
    constructor(x,y,s) {
        var i = {
            isStatic: true
        };
        this.rect1 = Bodies.rectangle(x, y, s * 20, s * 20, i);
        this.s = s;

        World.add(world, this.rect1);
    }
    display() {
        push();
        translate(this.rect1.position.x, this.rect1.position.y);
        var rectD = rect(this.rect1.position.x, this.rect1.position.y, this.s * 20, this.s * 20);
        pop();
    }
}
