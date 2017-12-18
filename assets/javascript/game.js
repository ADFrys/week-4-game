
// Define variables

var randomNumber = "";
var crystal1 = $("#crystal1");
var crystal2 = $("#crystal2");
var crystal3 = $("#crystal3");
var crystal4 = $("#crystal4");
var wins = 0;
var losses = 0;
var score = 0;

// When page loads ...
// 1) Display random number between 19 and 120 (and have it appear on screen)
// 2) Assign random number to each crystal (1-12) (does not appear)
// When a crystal is clicked, add the crystal's value to the total score (have it appear on screen)
// If the total score > the random number, add 1 to losses (appear on screen) and alert user of loss
// If the total score = the random number, add 1 to wins (appear on screen) and alert user of win
// Create a reset function that does the following...
// 1) Displays a new random number between 19 and 20 
// 2) Assigns a new random number to each crystal
// 3) Reset total score to 0 (displays on screen)

//When page loads
$(document).ready(function() {

  //assign random number to each crystal between 1 and 12
  crystal1 = Math.floor(Math.random() * 12 + 1);
  crystal2 = Math.floor(Math.random() * 12 + 1);
  crystal3 = Math.floor(Math.random() * 12 + 1);
  crystal4 = Math.floor(Math.random() * 12 + 1);
  console.log(crystal1);
  console.log(crystal2);
  console.log(crystal3);
  console.log(crystal4);
  
  //display random number between 19 and 120 for target score
  var randomNumberScore = Math.floor(Math.random() * ((120-19)+1) + 19);
  $(".total-score-text").append(randomNumberScore);
  
  $("#crystal1").on("click", function() {

  });



});