
var bluerect,redrect;



function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
bluerect=createSprite(200,150,50,100);
bluerect.shapeColor="blue";
redrect=createSprite(350,300,100,60);
redrect.shapeColor="red";
}

function draw() {
  background("black"); 
  
  redrect.x=World.mouseX;
  redrect.y=World.mouseY;

if (redrect.x-bluerect.x<=bluerect.width/2+redrect.width/2&&bluerect.x-redrect.x<=redrect.width/2+bluerect.width/2&&bluerect.y-redrect.y<=redrect.width/2+bluerect.width/2&&redrect.y-bluerect.y<=bluerect.width/2+redrect.width/2){
bluerect.shapeColor="green";
redrect.shapeColor="green";
}
else{
  bluerect.shapeColor="blue";
  redrect.shapeColor="red";
}



  drawSprites();






}