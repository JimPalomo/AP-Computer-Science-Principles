// Copyright 2019, Jim Palomo, All rights reserved. 
// Code created in Javascript @ Code.org
// Sample Timer 
// Link to code: https://studio.code.org/projects/applab/WXDCGKEiDLr3qSYCAg7xFuFK77MetQeBmidGl9xc07Y

// Sets pen/turtle properties
penUp();
moveTo(65,235);
penDown();
penWidth(2.5);

// Plays start sound
playSound("sound://category_digital/coin_1.mp3");

// Sets time to 0
var time = 0;

// Calls move function
move();

// Function
function move() {
  setInterval(function() {                          // SetInterval for setting text for time
  time = time + 1;
  setText("label1", "Seconds passed: " + time);
  setText("label2", time);
  }, 1000);

  setInterval(function() {                        // SetInterval for moving forward every second
  moveForward(5);
  }, 1000);
  
setInterval(function() {                          // SetInterval for arcing every 3/10 of a second
  arcRight(5,50);
  }, 300);

setInterval(function() {                          // SetInterval for changing pen color randomly & sound every 10 sec
  penRGB(randomNumber(50, 250),randomNumber(50, 250),randomNumber(50, 250));
  playSound("sound://category_digital/three_tone_pulse.mp3");
  }, 10000);
  
}


