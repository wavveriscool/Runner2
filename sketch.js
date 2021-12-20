
var runner, path;
var runnerImg,pathImg;

function preload(){
  pathImg = loadImage("path.png");
  runnerImg=loadAnimation("path.png")

runnerImg= loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  

  // Moving background
  path=createSprite(200,200);
  path.addImage(pathImg);
 path.scale=0.3;

  
  runner = createSprite(200,200,30,30);
  runner.addAnimation("Runner", runnerImg);
  runner.scale =0.09;
  
}

                                        
function draw() {
  background(0);
  
 path.velocityY= 1
 if(path.y > 400){
  path.y = height/2;
}
                                                    
 



    
  drawSprites();
}
