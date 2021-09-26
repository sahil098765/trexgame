
var trex, trex_running;
function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png")
}

function setup() {
  createCanvas(600, 200);
  //create a trex sprite
  trex = createSprite(100, 200, 30, 50);
  ground = createSprite(200, 200, 400, 30);
  trex.scale = 0.5;
  trex.x = 50;
  trex.addAnimation("bhag milkha bhag", trex_running);
  ground.addImage("bharat ki miti", groundImage);
  ground.velocityX = -4;
}

function draw() {
  background(black);

  if (keyDown("space")) {
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.8;
  trex.collide(ground);
  if (ground.x < 0) {
    ground.x = 200;
  }
  spawnCloud();
  drawSprites();
  
}
  
fuction spawnCloud() {
  if (frameCount % 60 === 0) {
    console.log(frameCount);
    cloud = createSprite(600, 100, 40, 10);
    cloud.addImage(cloudImage);
    cloud.y = Math.round(random(10, 60));
    cloud.scale = 0.4;
    cloud.velocityX = -3;
  }


}
 















