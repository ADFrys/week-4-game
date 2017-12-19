
//When page loads
$(document).ready(function() {

  var wins = 0;
  var losses = 0;
  var score = 0;
  var crystal1 = $("#crystal1");
  var crystal2 = $("#crystal2");
  var crystal3 = $("#crystal3");
  var crystal4 = $("#crystal4");

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

  /* Create a reset function that displays a new random number between 19 and 20, assigns a new
random number to each crystal. Resets total score to 0 and display on screen */
  function reset() {
    randomNumberScore = Math.floor(Math.random() * ((120-19)+1) + 19);
    $(".total-score-text").text(randomNumberScore);
    crystal1 = Math.floor(Math.random() * 12 + 1);
    crystal2 = Math.floor(Math.random() * 12 + 1);
    crystal3 = Math.floor(Math.random() * 12 + 1);
    crystal4 = Math.floor(Math.random() * 12 + 1);
    score = 0;
    $("p.score").text(score);
  }

  function keepScore(crystal) {

    console.log("score_before: " + score)
    score += crystal;
    console.log("score_after: " + score)
    $("p.score").text(score);

//If the total score = the random number, add 1 to wins (appear on screen) and alert user of win
    if (randomNumberScore === score) {
      wins++;
      $(".win").text(wins);
      alert("You won!");
      reset();
    }
  
  // If the total score > the random number, add 1 to losses (appear on screen) and alert user of loss
    if (score > randomNumberScore) {
      losses++;
      $(".lose").text(losses);
      alert("You lost. Try again.");
      reset();
    }
  }
// When a crystal is clicked, add the crystal's value to the total score (have it appear on screen)
    $("#crystal1").on("click", function() {
    keepScore(crystal1);
    });
    $("#crystal2").on("click", function() {
    keepScore(crystal2);
    });
    $("#crystal3").on("click", function() {
    keepScore(crystal3);
    });
    $("#crystal4").on("click", function() {
    keepScore(crystal4);
    });
    
  });


