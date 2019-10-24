var userWins = 0;
var numGuessLeft = 15;
var stopInput = false;
var wrongLetters = [];
var correctLetters = [];
var wordToGuess= [];
var word;


var userInputKeyText = document.getElementById("user-guess");
var userWinsText = document.getElementById("num-wins");
var wordToGuessText = document.getElementById("word");
var numOfGuessLeftText = document.getElementById("num-of-guess");
var changeImage = document.getElementById("imageDiv");
var playSong = document.getElementById("music");

var wordList = ["arya", "stark", "baratheon", "john", "tyrion", "ned", "targaryen", "greyjoy", "daenarys", "lannister", "snow", "joffrey", "drogo", "stannis", "bronn", "margaery", "tyrell", "melisandre"];

restartGame();
playMusic();

wordToGuessText.textContent = wordToGuess.join("");

document.onkeyup = function(event) {
    if (!stopInput){
        if (event.keyCode >= 65 && event.keyCode <= 90){
    var userGuess = event.key;
    console.log(userGuess);
    console.log("Correct Letters " + correctLetters);
    console.log("Wrong letters" + wrongLetters);

    for(var i = 0; i < word.length; i++){

     if( userGuess === word[i]){
        correctLetters[i] = event.key;
        console.log(correctLetters);
        wordToGuess[i] = userGuess;
        wordToGuessText.textContent = wordToGuess.join("");
        if(!correctLetters.includes(userGuess)){
            userInputKeyText.textContent += event.key + " ";
        }
        if (correctLetters.join("") === word){
            stopInput = true;
            
            userWins++;
            userWinsText.textContent = userWins;
            setTimeout(restartGame, 2000);
        }
     }
    }
    
     if (userGuess !== word[i]){
         if(!wrongLetters.includes(userGuess)){
             wrongLetters.push(userGuess)
             userInputKeyText.textContent += event.key + " ";
             numGuessLeft--;
             console.log(wrongLetters);
         }
         if (numGuessLeft === 0){
            stopInput=true;
            wordToGuessText.textContent = word;
            setTimeout(restartGame, 2000);
         }
     }
    
    numOfGuessLeftText.textContent = numGuessLeft;
    
}
    }
}

userWinsText.textContent = userWins;

function playMusic() {
    playSong.play();
}


function restartGame (){
    numGuessLeft = 15;
    correctLetters = [];
    wrongLetters = [];
    wordToGuess= [];
    stopInput= false;
    userInputKeyText.textContent = "";
    numOfGuessLeftText.textContent = numGuessLeft;
    
    word = wordList[Math.floor(Math.random() * wordList.length)];

    console.log(word);
    
    for (var i = 0; i < word.length; i++){
        
            wordToGuess.push("-");
    }
    wordToGuessText.textContent = wordToGuess.join("");
    }