var rocket, rocketImg;
var asteroid,asteroidImg,asteroidgroup;
var bckgrd,bckgrdImg;
var coin,coinImg,coinsgroup;

var PLAY = 1;
var END = 0;
var gameState = 1;

var score = 0;


function preload(){
rocketImg = loadImage("rocket.png");
bckgrdImg = loadImage("bck.png");
asteroidImg = loadImage("asteroid.png");
coinImg = loadImage("coin.png");
}

function setup() {

createCanvas(windowWidth,windowHeight);

bckgrd = createSprite(width/2,200);
bckgrd.addImage(bckgrdImg);
bckgrd.velocityY = 4.5;

rocket = createSprite(width/2,height-20,20,20);
rocket.scale = 0.07;

asteroid = new group();
coin = new group();

}

function draw() {
    background(200);
    if(gameState===PLAY){
        background(0);
        rocket.x = World.mouseX;
        edges= createEdgeSprites();
        rocket.collide(edges);
    }
    if(bckgrd.y > height){
        bckgrd.y = height/2
      }
    }

    createCoins();
    createAsteroids();


    if (coin.isTouching(boy)) {
        coin.destroyEach();
        score = score+10;
      }
        else {
        if(asteroidgroup.isTouching(rocket)) {
          gameState = END;

        coin.destroyEach();
        asteroid.destroyEach();

        coin.setVelocityYEach(0);
        asteroid.setVelocityYEach(0);
        }

        drawSprites();
        textSize(25);
        fill(205);
        text("Score: "+ score,width-150,30);
       }
    function createAsteroids() {
        if (World.frameCount % 180 == 0) {
        var asteroid = createSprite(Math.round(random(50, width-50),40, 10, 10));
        asteroid.addImage(asteroidImg);
        asteroid.scale=0.12;
        asteroid.velocityY = 5;
        asteroid.lifetime = 180;
        asteroid.add(asteroid);
        }
        }
    function createCoins() {
        if (World.frameCount % 200 == 0) {
        var coin = createSprite(Math.round(random(50, width-50),40, 10, 10));
        coin.addImage(coinImg);
        coin.scale=0.15;
        coin.velocityY = 4.5;
        coin.lifetime = 200;
        coin.add(coin);
        }
        }
     