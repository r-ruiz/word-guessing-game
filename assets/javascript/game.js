
// What has to be done:
// Computer randomly selects a word from a list
// Computer displays the word with the letters hidden, using underscores in the place for each letter
// User selects a letter (check the user input)
// Computer reduces the letter to lowercase if the user enters a capitol letter
// Computer checks the letter to see if that letter is in the word
// If the letter is in the word, it displays the letter in 'the hidden word'
// If the letter is not in the word, it displays the letter in 'letters history' and take away 1 guess away
// If there are no more guess, game over
// If the user solves the word, game over

// array of word choices
var computerChoices = ["picard", "data", "1701d", "holodeck", "borg", "klingon", "traveler", "starfleet", "starbase", "stardate", "jefferiestube", "warp", "vulcan", "romulan", "tasha", "geordi", "crusher", "troi", "wessley", "barkley", "riker", "galaxyclass", "constitutionclass", "transporters", "phasers", "photon", "worf", "bridge", "engineering", "tenforward", "isolinear", "computer", "cargobay", "riza", "commander", "captain", "numberone", "readyroom", "turbolift", "shuttlecraft", "quarters", "replicator", "primedirective", "deltaquadrant", "alphaquadrant", "admiral", "command", "cloak", "warbird", "roddenberry", "franks", "wheaton", "mcfadden", "stewart", "spiner", "burton", "laforge", "positronic", "security", "sheilds", "dorn", "gamaquadrant"];

// Creating variables to hold the number of tries, global random word, user guesses, and building the blank spaces for the random word.

var guessLeft = 10;
var computerWord;
var userHistory = [];
var guessArray = [];

function preGame(){
  // Randomly chooses a choice from the options array. This is the Computer's guess.
  computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  //Build solution array
  for (var i = 0; i < computerWord.length; i++){
    guessArray[i] = "_";
  }
    document.getElementById("gamegrid").innerHTML = guessArray.join(" ");
    document.getElementById("status").innerHTML = "Enter a letter then press guess, or press quit to give up, or press reboot for new word.";
    document.getElementById("counter").innerHTML= 10;
}

preGame(); // initialize the game

// Ends the game when there are no more tries
function fail() {
    document.getElementById("status").innerHTML = "Access Denied!"
    document.getElementById("counter").innerHTML = guessLeft;
    document.getElementById("end").play();
}

function logic(){
  var guess = document.getElementById("guess").value.toLowerCase();
  var updatedStatus = ""; // track the changes to status message

  if (guessLeft === 0){
    return fail();
  }

  if (guess.length !== 1){
    document.getElementById("unknown").play();
    updatedStatus = "You can only enter one letter";
  }
  else {
    for (i = 0; i < computerWord.length; i++){
      if (computerWord[i] === guess){
        document.getElementById("correct").play();
        guessArray[i] = guess;
        updatedStatus = guess + " is in the access code word";
      }
    }

    // set a variable with a value of unguessed letters
    var whatsLeft = guessArray.length;

    // count the number of remaining missing letters
    for (i = 0; i < guessArray.length; i++) {
      if (guessArray[i] !== '_') {
        whatsLeft -= 1;
      }
    }

    // check for any remaining letters to be uncovered
    if (whatsLeft == 0) {
      document.getElementById("win").play();
      updatedStatus = "Access Granted";
    }

    // Fallback to no match
    if (updatedStatus === "") {
      document.getElementById("error").play();
      updatedStatus = "Sorry, no " + guess;
      guessLeft -= 1;
    }

    // Update the array for letters tried
    userHistory.push(guess);

    // Update the screen
    document.getElementById("gamegrid").innerHTML = guessArray.join(" ");

    // Clear out the previous entry
    document.getElementById("guess").value = "";
  }

  // Check to see if there are any more tries left
  if (guessLeft === 0){
    return fail();
  }

  // otherwise update the screen
  else {
    document.getElementById("counter").innerHTML = guessLeft;
    document.getElementById("status").innerHTML = updatedStatus;
    document.getElementById("letterhistory").innerHTML = userHistory;
  }
  
}

// End the game and show the answer
function quit() {
  document.getElementById("status").innerHTML = "The access code word was " + computerWord;
  document.getElementById("gamegrid").innerHTML = computerWord;
}

// Refresh the page when user click on reboot button
function reboot() {
  document.getElementById("playgame").play();
  location.reload();
}