// Copyright 2019, Jim Palomo, All rights reserved. 
// Code created in Javascript @ Code.org
// Part of the digital design project
// Link to code: https://studio.code.org/projects/applab/WXDCGKEiDLr3qSYCAg7xFuFK77MetQeBmidGl9xc07Y

// Loops the function balloons()
  for (var i = 0; i < 30; i++) {
    balloons();
  }
  

function balloons() {
  penUp();
  moveTo(randomNumber(190,320), randomNumber(175,220));
  penRGB(randomNumber(0,255 ), randomNumber(0,255), randomNumber(0,255));
  dot(20);
  
}
