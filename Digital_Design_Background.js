// Copyright 2019, Jim Palomo, All rights reserved. 
// Code created in Javascript @ Code.org
// Part of the digital design project
// Link to code: https://studio.code.org/projects/applab/B7RMxNhEBPugpLmkUSnglKqIMkJ-XpLBWtKofPDJKL0

drawBackground();

//Functions

//Draws out multiple objects
function drawAllGlare() {
  for (var i = 0; i < 1; i++) {
    drawGlare();
  }
  
}

//Draws out function/object

//Draws sun -- Start of Jim's functions
function drawBackground() {
  drawBackgroundColor();
  drawSun();
  drawAllGlare();
  
}
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

//Draws background
function drawBackgroundColor() {
  penRGB(71,156,198,0.5);
  dot(500);
  
}

//End of Jim's function's
