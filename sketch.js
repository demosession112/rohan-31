var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var car1I, car2I, car3I, car4I;

var trackI, ground,track;

var car1,car2,car3,car4, cars;


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  car1I=loadImage("car1.png");
  car2I=loadImage("car2.png");
  car3I=loadImage("car3.png");
  car4I=loadImage("car4.png");

 trackI=loadImage("track.jpg");
 //ground=loadImage("images/ground.png");
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
