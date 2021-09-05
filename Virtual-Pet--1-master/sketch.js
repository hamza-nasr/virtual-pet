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
  dog=createSprite(250,250,150,150)
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
  text("Food Remaining",+foodS,170,200);
  textSize(20);
  

}
function readStock(data){
  foodS=data.val()
  console.log(foodS);
}


