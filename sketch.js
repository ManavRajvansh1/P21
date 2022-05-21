
var canvas;
var music;
var Surface1;
var Surface2;
var Surface3;
var Surface4;
var MovingBlock;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
  
    Surface1 = createSprite(70,580,200,20)
    Surface1.shapeColor = "Blue"
    Surface2 = createSprite(280,580,200,20)
    Surface2.shapeColor = "Orange"
    Surface3 = createSprite(490,580,200,20)
    Surface3.shapeColor = "Magenta"
    Surface4 = createSprite(700,580,200,20)
    Surface4.shapeColor = "Green"
    MovingBlock = createSprite(200,400,30,30)
    MovingBlock.shapeColor = "White"
    MovingBlock.velocityX = -5
    MovingBlock.velocityX = 5
    MovingBlock.velocityY = -5
    MovingBlock.velocityY = 5
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     createEdgeSprites();
  
//add condition to check if box touching surface and make it box
if(Surface1.isTouching(MovingBlock) && MovingBlock.bounceOff(Surface1)){
MovingBlock.shapeColor = "Blue"    
}
if(Surface2.isTouching(MovingBlock) && MovingBlock.bounceOff(Surface2)){
    MovingBlock.shapeColor = "Orange"    
    }
if(Surface3.isTouching(MovingBlock) && MovingBlock.bounceOff(Surface3)){
    MovingBlock.shapeColor = "Magenta"    
}
if(Surface4.isTouching(MovingBlock) && MovingBlock.bounceOff(Surface4)){
    MovingBlock.shapeColor = "Green"    
    }
drawSprites();
}
