var dog, happyDog  
var database, foodS;
var foodStock,readStock;
var img
var Dog

function preload()
{
  
  //load images here
  img = loadImage("Dog.png")
}

function setup() {
  database = firebase.database();
  createCanvas(800, 700);
  Dog = createSprite(420, 320, 40, 40);
  Dog.addImage(img);
  img.resize(200, 200);
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);
  drawSprites();
  //add styles here

}



