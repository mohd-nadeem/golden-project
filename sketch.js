var form, player, game;
var database;
var gameState = 0;
var playerCount;

function setup() {
  createCanvas(displayWidth - 20, displayHeight - 30);
  
  database = firebase.database();

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}