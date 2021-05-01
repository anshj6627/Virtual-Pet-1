var dog, happyDog1;
var database
var foodS,foodStock;
function preload()
{
dog1=loadImage("dogImg.png");
happyDog1=loadImage("dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(200,200,30,30);
  dog.addImage(dog1);
  dog.scale=0.5;
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDog1);
  }
  text("Food remaining: ",foodStock,400,350);
  textSize(20);
  fill("red");
  stroke(5);
  drawSprites();

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

