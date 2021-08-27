var box1
var box2
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(200,100, 65, 35, 2, 4);
  box2 = new Box(45,200,50,100,5,3)
}

function draw() 
{
  background(220);
box1.showrect();
box1.move();
box1.movedown();
box2.showrect();
box2.move()
}

