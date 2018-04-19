
// What has to be done:
// Computer waits for the user to start the game
// Computer randomly selects a word from a list
// Computer displays the word with the letters hidden, using underscores in the place for each letter
// User selects a letter (check the user input)
// Computer reduces the letter to lowercase if the user enters a capitol letter
// Computer checks the letter to see if that letter is in the word
// If the letter is in the word, it displays the letter in 'the hidden word'
// If the letter is not in the word, it displays the letter in 'letters tried' and take away 1 try

// array of word choices
var computerChoices = ["picard", "data", "1701d", "holodeck", "borg", "klingon", "traveler", "starfleet", "starbase", "stardate", "jefferiestube", "warp", "vulcan", "romulan", "tasha", "geordi", "crusher", "troi", "wessley", "barkley", "riker", "galaxyclass", "constitutionclass", "transporters", "phasers", "photon", "worf", "bridge", "engineering", "tenforward", "isolinear", "computer", "cargobay", "riza", "commander", "captain", "numberone", "readyroom", "turbolift", "shuttlecraft", "quarters", "replicator", "primedirective", "deltaquadrant", "alphaquadrant", "admiral", "command", "cloak", "warbird", "roddenberry", "franks", "wheaton", "mcfadden", "stewart", "spiner", "burton", "laforge", "positronic", "security", "sheilds", "dorn", "gamaquadrant"];

// Creating variables to hold the number of tries, user guesses, and building the blank spaces for the random word.

var maxTries = 10;
var userHistory = [];
var guessArray = [];

function preGame(){
  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  //Build solution array
  for (var i = 0; i < computerWord.length; i++){
    guessArray[i] = "_";
  }
    document.getElementById("gamegrid").innerHTML= guessArray.join(" ");
    document.getElementById("message").innerHTML= "Enter a letter then press guess, or press quit to stop playing."
}
preGame();

