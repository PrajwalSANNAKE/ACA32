
var bg, backgroundImg;
var IronMan, IronManImage; 

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  IronManImage=loadImage("images/iron.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  IronMan=createSprite(300,300);
  
  IronMan.addImage(IronManImage);
  IronMan.scale=0.3;
  bg.scale=2;

  ground=createSprite(50,550,2000,30);
  ground.visible=false;


}

function draw() {
   bg.velocityY=-4;
   if (bg.y<100)
   bg.y=bg.width/4;
  

  if(keyDown("up")){
    IronMan.velocityY=-10;
  }
  if(keyDown("left")){
    IronMan.velocityX=IronMan.velocityX-3;
  }
  if(keyDown("right")){
    IronMan.velocityX=IronMan.velocityX+3;
  }
  IronMan.velocityY=IronMan.velocityY+0.5;

  
  IronMan.collide(ground);
    
    drawSprites();
   
}

