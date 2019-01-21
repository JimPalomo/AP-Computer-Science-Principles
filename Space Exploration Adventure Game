// Copyright 2019, Jim Palomo, All rights reserved. 
// Code created in Javascript @ Code.org
// AP CSP Final, Space Exploration Adventure Game
// Link to code: https://studio.code.org/projects/applab/kT_AOOARKKm6wZ_ZvqCkJYoSjzvb-yhHUTRrTUGJEYM

drawWelcomeScreen();

moveTo(500,500);
playSound("sound://category_background/repitition.mp3", true);


// Welcome Screen
onEvent("rocket_intro","click",function() { 
  playSound("sound://category_background/large_fan.mp3", false);
  setInterval(function() {
  setPosition("rocket_intro",getXPosition("rocket_intro"), getYPosition("rocket_intro")- 10);  
  
  drawSmoke();
  function drawSmoke() {
  for (var i = 0; i < 5; i++) {
    penColor(rgb(235,235,0));
    penUp();
    moveTo(165, (245) - 10);
    penDown();
    dot(17);
    penColor(rgb(255,255,255));
    dot(15);
    penUp();
  }
  moveTo(500,500);
      }   
    },1000);
  setTimeout(function() {
  setScreen("guide_screen");
  stopSound("sound://category_background/large_fan.mp3");
  }, 3000);
});

function drawWelcomeScreen() {
  drawClouds();
  drawSmoke();
  drawStars();
  setPosition("satellite_intro", randomNumber(50, 250), randomNumber(70, 125));

}

function drawClouds() {
  for (var i = 0; i < 500; i++) {
    penColor(rgb(255,255,255));
    penUp();
    moveTo(randomNumber(0,320),randomNumber(350,450));
    penDown();
    dot(20);
    penUp();
  }
}

function drawSmoke() {
  for (var i = 0; i < 5; i++) {
    penColor(rgb(235,235,0));
    penUp();
    moveTo(randomNumber(160,165),randomNumber(260,290));
    penDown();
    dot(17);
    penColor(rgb(255,255,255));
    dot(15);
    penUp();
  }
}   

function drawStars() {
  for (var i = 0; i < 2; i++) {
  drawStarOne();
  drawStarTwo();
  }
}

function drawStarOne(){
  penUp();
  moveTo(randomNumber(0,125),randomNumber(75,330));
  penDown();
  turnTo(0);
  designStar();
  penUp();
}

function drawStarTwo(){
  penUp();
  moveTo(randomNumber(185,320),randomNumber(75,330));
  penDown();
  turnTo(0);
  designStar();
  penUp();
}

function designStar() {
  penRGB(225,225,255);
  penWidth(7);
  for (var i = 0; i < 4; i++) {
  moveForward();
  turnRight(144);
  moveForward();
  turnRight(144);  
  moveForward();
  turnRight(144);
  moveForward();
  turnRight(144);
  moveForward();
  turnRight(144);
  }
}

// -------------------------------------------------------------------------------------

// Guide Screen
onEvent("rocket_intro", "click", function() {
  rulesDialog();
});

function rulesDialog() {
  setTimeout(function() {
    setText("guide_speech", "Hello Explorer! I will help you throughout this journey!");
    playSound("Keyboard Typing Sound Effect.mp3", false);
  }, 3000);
  
  setTimeout(function() {
    setText("guide_speech", "Your goal is to explore and learn about space exploration!");
  }, 8000);
  
  setTimeout(function() {
   setText("guide_speech", "You will learn about space through completing different tasks!");
  }, 13000);
  
  setTimeout(function() {
   setText("guide_speech", "Before we explore any further, lets learn about our planet!");
  }, 18000);
    
  setTimeout(function() {
    setScreen("earth_screen");
    stopSound("sound://category_background/repitition.mp3");
    stopSound("Keyboard Typing Sound Effect.mp3");
    playSound("sound://category_background/inside_plane.mp3", true);
  }, 23000);
}

// -------------------------------------------------------------------------------------

// Earth Screen
onEvent("astronaut_earth", "click", function() {
  earthDialog();
  playSound("Keyboard Typing Sound Effect.mp3", false);
});

function earthDialog() {
  setTimeout(function() {
    setText("earth_speech", "This is our planet Earth! Earth was formed 4.54 billion years ago!");
  }, 0);
  
  setTimeout(function() {
    setText("earth_speech", "Earth is the only planet that supports an abundance of life...");
  }, 5000);

  setTimeout(function() {
    setText("earth_speech", "...that we currently know of by providing oxygen and water.");
  }, 10000);
    
  setTimeout(function() {
   setText("earth_speech", "Earth actually takes 23 hours and 56 minutes to rotate!");
  }, 15000);
  
  setTimeout(function() {
   setText("earth_speech", "Earth is the 3rd planet from the sun and is 17,700 km wide!");
  }, 20000);

  setTimeout(function() {
   setText("earth_speech", "Earth is our beautiful planet but there is a lot of trash surrounding it.");
  }, 25000);

  setTimeout(function() {
   setText("earth_speech", "Let's be green and keep earth clean!");
  }, 30000);
  
  setTimeout(function() {
    setScreen("junkGameIntro");
    stopSound("Keyboard Typing Sound Effect.mp3");
    hideElement("startBtn_junk");
  }, 35000);
}

// -------------------------------------------------------------------------------------

// Junk Game Intro Screen
onEvent("astronaut_earth", "click", function() {
  setTimeout(function() {
    playSound("Keyboard Typing Sound Effect.mp3", false);    
    junkGameIntroDialog();
  }, 35000);
});

onEvent("startBtn_junk", "click", function() {
  setScreen("junkGame");
});

function junkGameIntroDialog() {
  setTimeout(function() {
    setText("junkIntro_speech", "Let's help the Earth and further explorations by helping clean up some space junk!");
  }, 0);
  
  setTimeout(function() {
    setText("junkIntro_speech", "Collect at least 10 pieces of space trash!");
  }, 5000);

  setTimeout(function() {
    setText("junkIntro_speech", "Click on the space trash but make sure not to click the background!");
  }, 10000);
    
  setTimeout(function() {
  setText("junkIntro_speech", "Click start to begin!");
  stopSound("Keyboard Typing Sound Effect.mp3");
  showElement("startBtn_junk");
  }, 15000);
}

// -------------------------------------------------------------------------------------

// Junk Game Screen
var score = 0;
var lives = 3;

onEvent("startBtn_junk", "click", function() {
  junkGame();
  stopSound("Keyboard Typing Sound Effect.mp3");  
  stopSound("sound://category_background/inside_plane.mp3");
  playSound("sound://category_background/progression.mp3", false);  
});

function junkGame() {
  setTimeout(function() {
  setPosition("junk", randomNumber(50,280), randomNumber(50, 350));
  }, 1000);
onEvent("junk", "click", function() {
  setTimeout(function() {
  setPosition("junk", randomNumber(50,280), randomNumber(50, 350));
  }, 1000);
  score = score + 1;
  setText("score", "Score " + score);
  if (score >= 10) {
  setScreen("junkGameEnd");
  stopSound("sound://category_background/progression.mp3"); 
  playSound("sound://category_background/inside_plane.mp3", true);
  playSound("sound://category_male_voiceover/mission_completed_male.mp3", false);
  }
  });
}

onEvent("junkGameBackground", "click", function() {
  lives = lives - 1;
  setText("number_lives", "Lives: " + lives);
  playSound("https://audio.code.org/losepoint2.mp3", false);
  if (lives === 0) {
  setScreen("tryAgainScreen_junk");
  stopSound("sound://category_background/progression.mp3"); 
  playSound("sound://category_digital/fail.mp3", false);
  }
});


// -------------------------------------------------------------------------------------

// Junk Game Try Again Screen
  onEvent("returnBtn_junk", "click", function() {
    resetJunkGame();
    playSound("sound://category_background/progression.mp3", true); 
  });

function resetJunkGame() {
    setScreen("junkGame");
    lives = 3;
    setText("number_lives", "Lives: " + lives);
    score = 0;
    setText("score", "Score " + score); 
}
// -------------------------------------------------------------------------------------

// Junk Game End Screen
onEvent("astronaut_junkEnd", "click", function() {
  dialogFour();
});
  
  function dialogFour() {
  setTimeout(function() {
  setText("junkGameEnd_speech", "Great Work!");
  playSound("Keyboard Typing Sound Effect.mp3", false);
  playSound("sound://category_background/inside_plane.mp3", true);
  }, 0);

  setTimeout(function() {
  setText("junkGameEnd_speech", "You helped clean the earth!");
  }, 3000);  
  
  setTimeout(function() {
  setText("junkGameEnd_speech", "Now let's travel through space!");
  }, 6000);
  
  setTimeout(function() {
  stopSound("sound://category_background/inside_plane.mp3");
  stopSound("Keyboard Typing Sound Effect.mp3");
  playSound("sound://category_background/large_fan.mp3", false);
  setScreen("transition_screen");
  }, 9000);  
}  
// -------------------------------------------------------------------------------------

// Transition Screen
onEvent("astronaut_transition", "click", function() {
  transitionDialog();
});
  
  function transitionDialog() {
  setTimeout(function() {
  setText("transition_speech", "Your task is now to navigate through space itself and through our solar system!");
  playSound("Keyboard Typing Sound Effect.mp3", false);
  }, 0);

  setTimeout(function() {
  setText("transition_speech", "Get us to planet Mars!");
  }, 3000);  
  
  setTimeout(function() {
  setText("transition_speech", "Good Luck!");
  stopSound("Keyboard Typing Sound Effect.mp3"); 
  }, 6000);
  
  setInterval(function() {
  setPosition("rocket_transition",getXPosition("rocket_transition") + 10, getYPosition("rocket_transition"));  
  },1000);  
  
  setTimeout(function() {
  stopSound("sound://category_background/large_fan.mp3");
  playSound("sound://category_background/progression.mp3", false);
  setScreen("maze_screen");
  }, 9000);  
}
// -------------------------------------------------------------------------------------

// Maze Game Screen
  onEvent("maze", "mouseover", function() {
    setScreen("tryAgain_screen2");
    stopSound("sound://category_background/progression.mp3");
    playSound("sound://category_digital/fail.mp3", false);    
  });
  
  onEvent("mars", "mouseover", function() {
    setScreen("mazeGameEnd");
    stopSound("sound://category_background/progression.mp3");
    playSound("sound://category_digital/three_tone_pulse.mp3");
    playSound("sound://category_background/large_fan.mp3", false);
  });

// -------------------------------------------------------------------------------------

// Try Again Screen 2
  onEvent("returnBtnTwo", "click", function() {
    setScreen("maze_screen");
    playSound("sound://category_background/progression.mp3", false);
  });

// -------------------------------------------------------------------------------------

// Maze Game End Screen 
onEvent("astronaut_mazeEnd", "click", function() { 
  dialogSix();
});
  
  function dialogSix() {
  setTimeout(function() {
  setText("mazeGameEnd_speech", "Mars is a great planet!");
  playSound("Keyboard Typing Sound Effect.mp3", false);
  }, 0);

  setTimeout(function() {
  setText("mazeGameEnd_speech", "Let's get back on our journey through our solar system!");
  }, 3000);  

  setTimeout(function() {
  setText("mazeGameEnd_speech", "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  }, 8000);

  setTimeout(function() {
  setText("mazeGameEnd_speech", "Oh no! We are losing control of our systems and the asteroid belt is ahead!");
  }, 10000);

  setTimeout(function() {
  setText("mazeGameEnd_speech", "Help us get through the belt by clicking on the asteroid!");
  }, 13000);
  
  setInterval(function() {
  setPosition("rocket_mazeEnd",getXPosition("rocket_mazeEnd") + 10, getYPosition("rocket_mazeEnd"));  
  },1000);  
  
  setTimeout(function() {
  stopSound("sound://category_background/inside_plane.mp3");
  stopSound("sound://category_background/large_fan.mp3");
  stopSound("Keyboard Typing Sound Effect.mp3"); 
  setScreen("asteroidGame");
  playSound("sound://category_background/synthesize.mp3");
  asteroidGame();
  }, 16000);  
}

// -------------------------------------------------------------------------------------

// Asteroid Game Screen
var points = 0;

function asteroidGame() {
  hideElement("explosion");
  setTimeout(function() {
  setPosition("asteroid", randomNumber(50,280), randomNumber(50, 350));
  }, 1000);
onEvent("asteroid", "click", function() {
  setTimeout(function() {
  setPosition("explosion", getXPosition("asteroid"),getYPosition("asteroid"));
  setTimeout(function() {
  setPosition("asteroid", randomNumber(50,280), randomNumber(50, 350));
  showElement("explosion");
  playSound("sound://category_digital/laser_fade_1.mp3");
    }, 200);
  hideElement("explosion");
  }, 300);
  points = points + 1;
  setText("pointsLabel", "Points: " + points);
  if (points >= 10) {
  setScreen("asteroidGameEnd");
  stopSound("sound://category_background/synthesize.mp3");
  playSound("sound://category_background/inside_plane.mp3", true);
    }
  });
}

// -------------------------------------------------------------------------------------

// Asteroid Game End Screen
onEvent("astronaut_asteroidEnd", "click", function() {
  dialogSeven();
});
  
  function dialogSeven() {
  setTimeout(function() {
  setText("asteroid_speech", "Phew! Thanks for taking out those asteroids!");
  playSound("Keyboard Typing Sound Effect.mp3", false);
  }, 0);

  setTimeout(function() {
  setText("asteroid_speech", "You have explored two planets so far!");
  }, 4000);  

  setTimeout(function() {
  setText("asteroid_speech", "Where would you like to travel next?");
  }, 8000);  
  
  setTimeout(function() {
  setScreen("fastTravel_screen");
  stopSound("Keyboard Typing Sound Effect.mp3", false);
  playSound("sound://category_background/inside_plane.mp3", true);
  }, 11000);  
}

// -------------------------------------------------------------------------------------
  
// Fast Travel Screen
onEvent("mercury", "click", function() {
  setScreen("mercury_screen");
});

onEvent("venus", "click", function() {
  setScreen("venus_screen");  
});

onEvent("jupiter", "click", function() {
  setScreen("jupiter_screen");
});

onEvent("saturn", "click", function() {
  setScreen("saturn_screen");
});

onEvent("uranus", "click", function() {
  setScreen("uranus_screen");
});

onEvent("neptune", "click", function() {
  setScreen("neptune_screen");
});

onEvent("endBtn", "click", function() {
  setScreen("end_screen");
});

// -------------------------------------------------------------------------------------
  
// Mercury Screen
onEvent("astronaut_mercury", "click", function() {
  mercuryDialog();
  playSound("Keyboard Typing Sound Effect.mp3", false);
});

function mercuryDialog() {
  setTimeout(function() {
    setText("mercury_speech", "Mercury is the 1st planet in our solar system!");
  }, 0);
  
  setTimeout(function() {
    setText("mercury_speech", "Mercury lies closest to the sun!");
  }, 5000);

  setTimeout(function() {
   setText("mercury_speech", "Mercury is 4,900 km wide!");
  }, 10000);
  
  setTimeout(function() {
   setText("mercury_speech", "Mercury orbits the sun in 88 days!");
  }, 15000);

  setTimeout(function() {
   setText("mercury_speech", "Mercury is a cool planet!");
  }, 20000);

  setTimeout(function() {
   setText("mercury_speech", "Ready to return? Click return to go back to fast travel.");
  stopSound("Keyboard Typing Sound Effect.mp3");
  }, 25000);
}

onEvent("returnBtn_mercury", "click", function() {
  setScreen("fastTravel_screen");
  stopSound("Keyboard Typing Sound Effect.mp3");
  });
  
// -------------------------------------------------------------------------------------

// Venus Screen
onEvent("astronaut_venus", "click", function() {
  venusDialog();
  playSound("Keyboard Typing Sound Effect.mp3", false);
});

function venusDialog() {
  setTimeout(function() {
    setText("venus_speech", "Venus is the 2nd planet in our solar system!");
  }, 0);
  
  setTimeout(function() {
    setText("venus_speech", "Venus is 108,000,000 km away from the sun!");
  }, 5000);
    
  setTimeout(function() {
   setText("venus_speech", "Venus is 12,100 km wide!");
  }, 10000);
  
  setTimeout(function() {
   setText("venus_speech", "Venus's length of orbit is 225 days!");
  }, 15000);

  setTimeout(function() {
   setText("venus_speech", "Would you want to live on Venus? I wouldn't because it is made out of 96% Carbon Dioxide!");
  }, 20000);

  setTimeout(function() {
    setText("venus_speech", "Ready to return? Click return to go back to fast travel.");
    stopSound("Keyboard Typing Sound Effect.mp3");  
  }, 25000);
}

onEvent("returnBtn_venus", "click", function() {
  setScreen("fastTravel_screen");
  stopSound("Keyboard Typing Sound Effect.mp3");
  });
  
// -------------------------------------------------------------------------------------

// Jupiter Screen
onEvent("astronaut_jupiter", "click", function() {
  jupiterDialog();
  playSound("Keyboard Typing Sound Effect.mp3", false);
});

function jupiterDialog() {
  setTimeout(function() {
    setText("jupiter_speech", "Jupiter is the 5th planet in our solar system!");
  }, 0);
  
  setTimeout(function() {
    setText("jupiter_speech", "Jupiter is 778,000,000 km away from the sun!");
  }, 5000);

  setTimeout(function() {
    setText("jupiter_speech", "Also Jupiter is 143,000 km wide!");
  }, 10000);
    
  setTimeout(function() {
   setText("jupiter_speech", "Additionally, Jupiter takes 11.9 years to orbit the sun!");
  }, 15000);
  
  setTimeout(function() {
   setText("jupiter_speech", "Furthermore, Jupiter is made out of ammonia, methane, and hydrogen!");
  }, 20000);

  setTimeout(function() {
   setText("jupiter_speech", "Jupiter contains one ring!");
  }, 25000);

  setTimeout(function() {
    setText("jupiter_speech", "Ready to return? Click return to go back to fast travel.");
    stopSound("Keyboard Typing Sound Effect.mp3");
  }, 30000);
}

onEvent("returnBtn_jupiter", "click", function() {
  setScreen("fastTravel_screen");
  stopSound("Keyboard Typing Sound Effect.mp3");
  });
  
// -------------------------------------------------------------------------------------

// Saturn Screen
onEvent("astronaut_saturn", "click", function() {
  saturnDialog();
  playSound("Keyboard Typing Sound Effect.mp3", false);
});

function saturnDialog() {
  setTimeout(function() {
    setText("saturn_speech", "Saturn is the 6th planet in our solar system!");
  }, 0);
  
  setTimeout(function() {
    setText("saturn_speech", "Saturn is 1,427,000,000 km away from the sun!");
  }, 5000);

  setTimeout(function() {
    setText("saturn_speech", "Moreover, Saturn is 120,000 km wide!");
  }, 10000);
    
  setTimeout(function() {
   setText("saturn_speech", "Saturn is made out of poisonous gases, ice, rocks, and dust!");
  }, 15000);
  
  setTimeout(function() {
   setText("saturn_speech", "It takes Saturn 29.5 years to orbit the sun!");
  }, 20000);

  setTimeout(function() {
   setText("saturn_speech", "Saturn also has over 1000+ rings!");
  }, 25000);

  setTimeout(function() {
    setText("saturn_speech", "Ready to return? Click return to go back to fast travel.");
    stopSound("Keyboard Typing Sound Effect.mp3");   
  }, 30000);
}

onEvent("returnBtn_saturn", "click", function() {
  setScreen("fastTravel_screen");
  stopSound("Keyboard Typing Sound Effect.mp3");
  });
  
// -------------------------------------------------------------------------------------

// Uranus Screen
onEvent("astronaut_uranus", "click", function() {
  uranusDialog();
  playSound("Keyboard Typing Sound Effect.mp3", false);
});

function uranusDialog() {
  setTimeout(function() {
    setText("uranus_speech", "Uranus is the 7th planet in our solar system!");
  }, 0);
  
  setTimeout(function() {
    setText("uranus_speech", "Uranus is 2,871,000,000 km away from the sun");
  }, 5000);

  setTimeout(function() {
    setText("uranus_speech", "Furthermore, Uranus is made out of methane, helium, and hydrogen gas!");
  }, 10000);
    
  setTimeout(function() {
   setText("uranus_speech", "It takes Uranus 84 years to orbit the sun!");
  }, 15000);
  
  setTimeout(function() {
   setText("uranus_speech", "Also, Uranus has 11 rings!");
  }, 20000);

  setTimeout(function() {
    setText("uranus_speech", "Ready to return? Click return to go back to fast travel.");
    stopSound("Keyboard Typing Sound Effect.mp3");
  }, 25000);
}

onEvent("returnBtn_uranus", "click", function() {
  setScreen("fastTravel_screen");
  stopSound("Keyboard Typing Sound Effect.mp3");
  });
  
// -------------------------------------------------------------------------------------

// Neptune Screen
onEvent("astronaut_neptune", "click", function() {
  neptuneDialog();
  playSound("Keyboard Typing Sound Effect.mp3", false);
});

function neptuneDialog() {
  setTimeout(function() {
    setText("neptune_speech", "Neptune is the farthest from the sun and 8th in our solar system!");
  }, 0);

  setTimeout(function() {
    setText("neptune_speech", "Neptune is located 4,505,000,000 km away from the sun!");
  }, 5000);

  setTimeout(function() {
    setText("neptune_speech", "Additionally, Neptune is made out of methane and ice.");
  }, 10000);
    
  setTimeout(function() {
   setText("neptune_speech", "Neptune takes 165 years to orbit the sun!");
  }, 15000);
  
  setTimeout(function() {
   setText("neptune_speech", "Neptune has 8 satellites (moons)!");
  }, 20000);

  setTimeout(function() {
   setText("neptune_speech", "Neptune has 5 rings!");
  }, 25000);

  setTimeout(function() {
    setText("neptune_speech", "Ready to return? Click return to go back to fast travel.");
    stopSound("Keyboard Typing Sound Effect.mp3");
  }, 30000);
}

onEvent("returnBtn_neptune", "click", function() {
  setScreen("fastTravel_screen");
  stopSound("Keyboard Typing Sound Effect.mp3");
  });

// -------------------------------------------------------------------------------------

// End Screen
onEvent("endBtn", "click", function() {
  playSound("sound://category_background/repitition.mp3", true);
  setInterval(function() {
    setPosition("rocket_end",getXPosition("rocket_end"), getYPosition("rocket_end") - 10);  
  },1000);
  });

onEvent("restartBtn", "click", function() {
  setScreen("welcome_screen");
  setPosition("rocket_intro", 115, 160);
  });
// -------------------------------------------------------------------------------------
