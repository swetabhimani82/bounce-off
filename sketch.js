var emma, granger;

function setup() {
  createCanvas(800,400);
  emma = createSprite(400, 200, 50, 50);
  emma.shapeColor = "blue";

  granger = createSprite(100,200, 50, 50);
  granger.shapeColor = "aqua";

  granger.velocityX = 4;
  emma.velocityX = -4;
}

function draw() {
  background("pink");
  
 

  if (granger.x - emma.x < granger.width/2 + emma.width/2 
    && emma.x - granger.x < granger.width/2 + emma.width/2  ) {
    granger.velocityX = granger.velocityX * (-1);
    emma.velocityX = emma.velocityX * (-1);
  }

  else if (emma.y - granger.y < emma.height/2 + granger.height/2
    && granger.y - emma.y < emma.height/2 + granger.height/2) {
      granger.velocityY = granger.velocityY * (-1);
      emma.velocityY = emma.velocityY * (-1);
  }
  drawSprites();
}