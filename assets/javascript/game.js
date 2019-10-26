
//Variable declarations
var userWins = 0; //keeps track of wins
var numGuessLeft = 15; //keeps track of guesses left
var stopInput = false; //pauses game
var wrongLetters = []; //array of letters pressed
var correctLetters = []; //array of letters correctly pressed
var wordToGuess= []; 
var word;

//variables to update text on screen
var userInputKeyText = document.getElementById("user-guess");
var userWinsText = document.getElementById("num-wins");
var wordToGuessText = document.getElementById("word");
var numOfGuessLeftText = document.getElementById("num-of-guess");
var changeImage = document.getElementById("imageDiv");
var playSong = document.getElementById("music");

//array containing words to guess
var wordList = ["arya", "stark", "baratheon", "john", "tyrion", "ned", "targaryen", "greyjoy", "daenarys", "lannister", "snow", "joffrey", "drogo", "stannis", "bronn", "margaery", "tyrell", "melisandre"];

//function call to make sure game is ready to go
restartGame();


//function looking for key press
document.onkeyup = function(event) {
    //check to see if the game is paused
    if (!stopInput){
        //check that keys pressed are a-z lowercase
        if (event.keyCode >= 65 && event.keyCode <= 90){
         //set the key pressed to userGuess var
        var userGuess = event.key;
        console.log(userGuess);
        console.log("Correct Letters " + correctLetters);
        console.log("Wrong letters" + wrongLetters);

            //for loop to iterate through the word to guess and check the user key press is found within the word selected from wordList array
            for(var i = 0; i < word.length; i++){

                //logic to find a letter that was pressed inside the word
                if( userGuess === word[i]){
                    //add the correct letter to the array
                    correctLetters[i] = event.key;
                    console.log(correctLetters);
                    //add the correct letter to the array and write it to the screen
                    wordToGuess[i] = userGuess;
                    wordToGuessText.textContent = wordToGuess.join("");
                    //checks to see if the user already guessed the same letter
                    if(!correctLetters.includes(userGuess)){
                        userInputKeyText.textContent += event.key + " ";
                    }
                    //checks to see if the user has guessed all correct letters, stops the game from taking in input, increases the wins on the screen, then resets the game after 2 seconds.
                    if (correctLetters.join("") === word){
                        stopInput = true;
                        userWins++;
                        userWinsText.textContent = userWins;
                        setTimeout(restartGame, 2000);
                    }
                }
            }
    
            //logic for when user presses a letter not in the word
            if (userGuess !== word[i]){
                //adds wrong letter in to the wrongLetter array, adds the letter to the letters guessed on screen, subtracts the number of guesses 
                if(!wrongLetters.includes(userGuess)){
                wrongLetters.push(userGuess)
                userInputKeyText.textContent += event.key + " ";
                numGuessLeft--;
                console.log(wrongLetters);
                }
                // checks to see if there are zero guesses left, stops input, shows the correct word, and restarts game after 2 seconds.
                if (numGuessLeft === 0){
                    stopInput=true;
                    wordToGuessText.textContent = word;
                    setTimeout(restartGame, 2000);
                }
            }
    
            //updates how many guesses left on screen
            numOfGuessLeftText.textContent = numGuessLeft;
    
        }
    }
}

//Initially sets the number wins on screen to zero
userWinsText.textContent = userWins;


//function to reset the game after a loss or win.
function restartGame (){
    //resetting variables
    numGuessLeft = 15;
    correctLetters = [];
    wrongLetters = [];
    wordToGuess= [];
    stopInput= false;
    userInputKeyText.textContent = "";
    numOfGuessLeftText.textContent = numGuessLeft;
    //randomly selecting a word within the wordList array
    word = wordList[Math.floor(Math.random() * wordList.length)];

    console.log(word);
    
    //Pushing the appropriate number of dashes into the wordToGuess array
    for (var i = 0; i < word.length; i++){
        
        wordToGuess.push("-");
    }
    //writing the dashes on to the screen.
    wordToGuessText.textContent = wordToGuess.join("");
}