//Create variables here
var dog, happyDog, dogImage, dogImage1;
var database, foodS, foodStock;
function preload()
{
	//load images here
  dogImage=loadImage("images/dogImg.png");
  dogImage1=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,270,40,40)
  dog.addImage(dogImage);
  dog.scale=0.15;
  foodStock=database.ref("food");
  foodStock.on("value", readStock);
  textSize(20);
}

function draw() {  
background(46,139,87);
  drawSprites();
  //add styles here
  stroke("black");
  fill("black");
  textSize(20);
  text(foodS,220,120);
  text("Press UP-ARROW to feed the dog",70,50);
  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImage1);
  }
  

}
function readStock(data){
  foodS=data.val()
  console.log(foodS);
}
function writeStock(count){
if(count<=0){
  count=0;
}else{
  count=count-1;
}
database.ref("/").update({
  food:count
})
}

