// Copyright 2019, Jim Palomo, All rights reserved. 
// Code created in Javascript @ Code.org
// Drum Machine based on buttons & implementation of sound 
// Link to code: https://studio.code.org/projects/applab/W5U26vjG9uSLAi8V-65_KMJBGV-fwC2bJsfMip3Aqks

function playInstrument(instrument) {
  setSize(instrument, 65, 65);
  setProperty(instrument, "background-color", "blue");
  if (instrument == "kick") {
    playSound("Kick.mp3");
  } else if ((instrument == "snare")) {
    playSound("Snare.mp3");
  } else if ((instrument == "hihat")) {
    playSound("HiHat.mp3");
  } else {
    playSound("Ho Hey Clip.mp3", false);
  }
  setTimeout(function() {
    setSize(instrument, 60, 60);
    setProperty(instrument, "background-color", "teal");
    return true;
  }, 100);
}
onEvent("kick", "click", function(event) {
  playInstrument("kick");
});
onEvent("snare", "click", function(event) {
  playInstrument("snare");
});
onEvent("hihat", "click", function(event) {
  playInstrument("hihat");
});
onEvent("sample", "click", function(event) {
  playInstrument("sample");
});
function getInstrument(key) {
  if (key == "1") {
    return "kick";
  } else if ((key == "2")) {
    return "snare";
  } else if ((key == "3")) {
    return "hihat";
  } else if ((key == "4")) {
    return "sample";
  } else {
    return false;
  }
}
onEvent("drums", "keypress", function(event) {
  var key = event.key;
  var instrument = getInstrument(key);
  if (instrument) {
    playInstrument(instrument);
  }
  console.log("event");
});
