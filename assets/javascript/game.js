
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

var tries = 10;
var userHistory = [];
var guessArray = [];

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      console.log(computerWord.length);

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      
      // Build the number of slots for the random word
      for (var i = 0; i < computerWord.length; i++){
        guessArray[i] = "_";
      }
      
      // Game progress, we must display the game grid and error-check user input
      // There are three options and an action:
      // 1. Exit the game immediately
      // 2. Check to see if only one letter is entered
      // 3. Check to see they did enter something! 
      // Action: If user enter a character, update the game with the user guess

      while (tries > 0){
        // Display the gaming grid and where the player will start from
        var userProgress = document.getElementById("game");
        // Remove the commas and add a space between each dash
        userProgress.innerHTML = guessArray.join(" ");
        var userGuess = prompt("Guess a letter, or click Cancel to quit"); 
        // If user click on cancel, exit the game
        if (userGuess === null){
          break;
        }
        // check to make sure only one key was pressed
        else if (userGuess.length !== 1){
          alert("Please enter one character.");
        }
        else {
          for (j = 0; j < computerWord.length; j++){
            if (computerWord[j] === userGuess){
              guessArray[j] = userGuess;
            }
            
              alert(userGuess + " is not in the word");
              userHistory.push(userGuess);
              tries--;
              break;
        
          }
          
        }
      }
        console.log(guessArray);
        console.log(computerWord);
        userHistory.push(userGuess);
        console.log(userHistory);


      // Reworked our code from last step to use "else if" instead of lots of if statements.

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
      
      // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>You chose: " + userGuess + "</p>";
          // "<p>The computer chose: " + computerGuess + "</p>" +
          // "<p>wins: " + wins + "</p>" +
          // "<p>losses: " + losses + "</p>" +
          // "<p>ties: " + ties + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        // document.querySelector("#game").innerHTML = html;
        
      }
