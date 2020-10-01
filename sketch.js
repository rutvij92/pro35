//Create variables here
var dog, happyDog, database, foodS, foodStock;
var Dog;
var database;
var dbref;
var feed;
var fedTime,lastFeed;
var addFood;
var foodObj;
function preload()
{
  //load images here
  dog=loadImage("images/dogimg.png");
 happyDog =loadImage("images/dogimg1.png")
}

function setup() {
	createCanvas(1000, 500);
  database=firebase.database();
  Dog=createSprite(250,390,20,20);
  Dog.addImage(dog);
  Dog.scale=0.3;

  foodStock=database.ref("Food");
  foodStock.on("value",readstock);
  // foodObj=new Food();

feed=createButton("Feed the dog");
feed.position(700,95);
feed.mousePressed(feedDog(foodS));

addFood=createButton("Add Food");
addFood.position(800,95);
// addFood.mousePressed(addFoods);

 
}


function draw() {  
background(46, 139, 87);
  drawSprites();



// fedTime=database.ref("FeedTime");
/* fedTime.on("value",function(data){
  lastFed=data.val();

});*/
// fill("black");
// textSize(20);
 // text("foodstockavailable:"+foodS,120,50);

//  foodObj.display();
}




function readstock(data){
  foodS=data.val();
}

function feedDog(x){

  if(x<=0){
      x=0;
    }
  else{
    x=x-1;
    }
  
  database.ref("/").update({
    Food:x
  })
}

