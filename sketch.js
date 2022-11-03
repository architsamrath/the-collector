var bean,beanImg;
var sussy,sussyImg;
var bgImg;
var bananaImg,bananaGroup;
var crown,crownImg;
var sound1;
var ground;
let timer = 6
var test;
var score = 10 ;
var obstacle,obstacleImg,obstacleGroup;
var restart,restartImg;



function preload(){
    beanImg = loadImage("bean.png")
    sussyImg = loadImage("sussy.png")
   sound1 = loadSound("bgMusic.mp3")
    bgImg = loadImage("background.jpg")
    obstacleImg = loadImage("obstacle.png")
    bananaImg = loadImage("banana.png")
    
 

}
function setup(){
    createCanvas(windowWidth,windowHeight)
    sussy = createSprite(100,650,60,60)
    sussy.addImage(sussyImg)
    sussy.scale = 0.2
    sussy.debug = true
    sussy.setCollider ("circle",0,0,350)
    

    bean = createSprite(250,650,60,60)
    bean.addImage(beanImg)
    bean.scale = 0.4
    bean.visible = false;
    
    

    bananaGroup = new Group()
    obstacleGroup = new Group()
    
    

     sound1.loop()
    
  
}
function draw(){
  background(bgImg)
   
    //Sussy();
    sussy.velocityY=0;
    stroke("white")
    textSize(30)
    fill("black")
    text("score =  "+score,500,100)
    
    
    if(keyIsDown(UP_ARROW) ){
       // sussy.y=sussy.y+10;
       sussy.velocityY=-5;
       
    }
    if(keyIsDown(DOWN_ARROW) ){
      // sussy.y=sussy.y+10;
      sussy.velocityY= 5
      
   }
   for(i = 0; i<bananaGroup.length; i++){
    if(bananaGroup.get(i).isTouching(sussy)){
      bananaGroup.get(i).remove()
      score++
    }

   }
   for(i = 0; i<obstacleGroup.length; i++){
    if(obstacleGroup.get(i).isTouching(sussy)){
      obstacleGroup.get(i).remove()
      score = score - 1
    }

    if(score < 1){
      stroke("black")
      textSize(50)
      fill("yellow")
      text("BETTER LUCK NEXT TIME",300,300,)
      
      }
    

   }
    SpawnBananas();
    Obstacle();


   
    drawSprites();
   
 

}
function SpawnBananas(){
  if(frameCount % 70 === 0) {
    var banana = createSprite(600,100,40,20)
    banana.addImage( bananaImg)
    banana.scale = 0.3
    banana.y = Math.round(random(100,550))
    banana.velocityX = -5
    banana.lifetime = 200
    bananaGroup.add(banana)
    banana.lifetime = 300

    

  } 

  

    
}
function time(){
if(frameCount % 60 === 0 && timer > 0 ){
console.log("in function")
}
if (timer == 0 ){
   text("game over" , 200,200)
}

}

function Obstacle(){
  if(frameCount % 70 === 0) {
    var obstacle = createSprite(700,200,40,20)
    obstacle.y = Math.round(random(200,500))
    obstacle.velocityX = -5
    obstacle.lifetime = 200
    obstacleGroup.add(obstacle)
    obstacle.lifetime = 300
    obstacle.addImage(obstacleImg)
    obstacle.scale = 0.3;

    

  } 
}
function Reset(){
  bananaGroup.destroyEach()
    obstacleGroup.destroyEach()
    sussy.velocityY = 0
  
}

