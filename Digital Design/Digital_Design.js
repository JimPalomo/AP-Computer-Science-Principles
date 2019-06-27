// Copyright 2019, Jim Palomo, Michael Murillo, Gino, Colin All rights reserved. 
// Code created in Javascript @ Code.org
// Digital Design Project, collaborative project in which each person does a piece of the project
// Link to code: https://studio.code.org/projects/applab/mgrg2Hl2p5HKLdq2MudANHe5XKsOuspKb9P5YnlvkeM

//Calls function 
//The draw design function creates the whole scene with one command
drawDesign();


//Functions

//Creates a function to call all other functions
function drawDesign() {
  
//Call's Jim's Balloons
  drawBackground();

//Call's Mike's Clouds
  drawClouds();

//Realigns turtle for the house to be imaged/oriented correctly
  turnLeft(160);

//Calls strings
  allStrings(2);

//Calls Colin's house
  drawWholeHouse();

//Calls Gino's Balloons
drawAllBalloons();
}

//Draws out multiple glares
function drawAllGlare() {
  for (var i = 0; i < 1; i++) {
    drawGlare();
  }
  
}

//Start of Jim's function

//Draws full background w/ glares
function drawBackground() {
  drawBackgroundColor();
  drawSun();
  drawAllGlare();
  
}

//Draws sun
function drawSun() {
  penRGB(255,255,255, 0.5);
  penUp();
  moveTo(60,60);
  penDown();
  dot(randomNumber(20,30));
  dot(randomNumber(35,50));
  penUp();
}

//Draws glare
function drawGlare() {
  penRGB(255,255,255, 0.1);
  moveTo(randomNumber(100,150), randomNumber(90,130));
  dot(randomNumber(30,40));
  turnRight(120);
  moveForward(90);
  dot(randomNumber(15,25));
  moveForward(40);
  dot(randomNumber(5,40));

}

//Draws background color -- set to random background colors (change to sky blue color = (71,156,198,0.5))
function drawBackgroundColor() {
  penRGB(randomNumber(0,255),randomNumber(0,255),randomNumber(0,255));
  dot(500);
  
}

//End of Jim's function's


//Start of Mike's functions

//Creates function to draw clouds by looping
function drawClouds(){
  penUp();
for (var i = 0; i < 50; i++) {
    moveTo(randomNumber(0,320),randomNumber(320,500));
    drawCloud(randomNumber(15,25));
  }
    
}
//Draws a bundle of clouds
function drawCloud(size) {
  turnLeft();
  penRGB(255,255,255, 0.1);
  dot(size);   
  moveForward();
  dot(size);
  turnRight();
  moveForward();
  dot(size);
  turnRight(60);
  moveForward();
  dot(size);
  turnRight(120);
  moveForward();
  dot(size);
  turnRight(20);
  moveForward();
  moveForward(10);
  dot(size);
  turnLeft(120);
  moveForward(10);
  dot(size);
  hide();
  penUp();
}

//End of Mike's functions


//Start of Colin's functions

//Draws top of house
function topOfHouse() {
  penUp();
  moveTo(200, 300);
  penDown();
  turnRight(90);
  penRGB(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255));
  turnRight(30);
  moveForward(120);
  moveTo(300, 300);
}

//Draws bottom half of house
function drawHouse(length) {
  penRGB(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255));
  moveForward(length);
  turnRight(90);
}
//Draws the whole house by combining the top and bottom
function drawWholeHouse(){
  penUp();
  moveTo(300, 400);
  penDown();
  turnLeft(90);
  penWidth(15);
for (var i = 0; i < 4; i++) {
  drawHouse(100);
}
  topOfHouse();
  penUp();
  turnRight(60);
  turnLeft(90);
  hide();
}

//End of Colin's functions


//Start of Gino's function

//Draws balloon
function drawBalloon() {
  penUp();
  moveTo(randomNumber(190,320), randomNumber(100,175));
  penRGB(randomNumber(0,255), randomNumber(0,255), randomNumber(0,255));
  dot(20);
  
}

function drawAllBalloons() {
    for (var i = 0; i < 50; i++) {
    drawBalloon();
  }
  
}
//End of Gino's function


//Extra function I put in

//Creates a function for a singular strand of string (String is quite hidden behind all the balloons)
function strings(length){
  moveTo(randomNumber(250,265), (randomNumber(190,190)));
  penWidth(length);
  penRGB(255,255,255, 0.4);
  penDown();
  moveForward(50);
  
}
//Creates a function to form multiple strings
function allStrings(length){
  for (var i = 0; i < 20; i++) {
    strings(length);
  }
  
}
