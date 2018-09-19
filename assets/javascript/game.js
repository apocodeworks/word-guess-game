

// Define variables and arrays

var arbitVar = "test" ;
var newGuesses = [];
var reset = false;
var options = ["Mario", "Samus", "Kirby", "Yoshi"]
var answerFive = ["_", "_", "_", "_", "_"]
var wins = 0;
var guessCount = 10;
var threshold = true;


// Define function for wrong guesses


function wrongGuess() {

    guessCount = guessCount - 1 

    document.getElementById("guessText").innerHTML = "Guesses Remaining: " + guessCount;
}


function winGame() {

    if ( answerFive[0] != "_" && answerFive[1] != "_" && answerFive[2] != "_" && answerFive[3] != "_" && answerFive [4] != "_"){

        document.getElementById("gamePort").innerHTML = "You win! Refresh to play again."
    }
}




  // picks word from array

  var wordPick = options[Math.floor(Math.random() * options.length)];

  console.log(wordPick) 


function newGame() {


    // sets reset value to renew game

    if (reset === true) {

         location.reload()

     } else {


    // sets initial game board

    document.getElementById("winText").innerHTML = "wins: " + wins;
    document.getElementById("guessText").innerHTML = "Guesses Remaining: " + guessCount;
    document.getElementById("selectText").innerHTML = "Letters Guessed: " ;
    document.getElementById("startButton").innerHTML = "Reset" ;
    document.getElementById ("wordClue").innerHTML = answerFive

    reset = true;

    
     }




};


var guesses = []

// log and print keystrokes

document.onkeypress = function(event){
    var input = event.key;
    console.log(input);
    guesses.push(event.key);
    console.log(guesses);
    document.getElementById("selectText").innerHTML = "Letters Guessed:" + guesses;



// if word is mario, accept those letters


if (wordPick === "Mario") {

    console.log("Mario was picked")
    if (input === "m") {

        answerFive[0]="m"
        document.getElementById ("wordClue").innerHTML = answerFive
        winGame()


    }else if (input === "a"){

        answerFive[1]="a"
        document.getElementById ("wordClue").innerHTML = answerFive
        winGame()

    }else if (input ==="r"){

        answerFive[2] = "r"
        document.getElementById ("wordClue").innerHTML = answerFive
        winGame()

    }else if (input ==="i"){

        answerFive[3] = "i"
        document.getElementById ("wordClue").innerHTML = answerFive
        winGame()

    }else if (input === "o"){

        answerFive[4] = "o"
        document.getElementById ("wordClue").innerHTML = answerFive
        winGame()

    }else {

        console.log("wrong guess")
        wrongGuess()
        
        if (guessCount <= 0){

            console.log("lose!")
            document.getElementById("gamePort").innerHTML="You lose! Refresh and try again."
        }

    }

// if Yoshi, accept those letters

}else if (wordPick === "Yoshi") {

    console.log ("Yoshi was picked")

    if (input === "y") {

        answerFive[0]="y"
        document.getElementById ("wordClue").innerHTML = answerFive
        winGame()


    }else if (input === "o"){

        answerFive[1]="o"
        document.getElementById ("wordClue").innerHTML = answerFive
        winGame()

    }else if (input ==="s"){

        answerFive[2] = "s"
        document.getElementById ("wordClue").innerHTML = answerFive
        winGame()

    }else if (input ==="h"){

        answerFive[3] = "h"
        document.getElementById ("wordClue").innerHTML = answerFive
        winGame()

    }else if (input === "i"){

        answerFive[4] = "i"
        document.getElementById ("wordClue").innerHTML = answerFive
        winGame()

    }else {

        console.log("wrong guess")
        wrongGuess()

        if (guessCount <= 0){

            console.log("lose!")
            document.getElementById("gamePort").innerHTML="You lose! Refresh and try again."
        }
        
    }

    // if Samus, accept those letters

}else if (wordPick === "Samus"){

    console.log ("Samus was picked")

    if (input === "s") {

        answerFive[0]="s"
        answerFive[4]="s"
        document.getElementById ("wordClue").innerHTML = answerFive
        winGame()


    }else if (input === "a"){

        answerFive[1]="a"
        document.getElementById ("wordClue").innerHTML = answerFive
        winGame()

    }else if (input ==="m"){

        answerFive[2] = "m"
        document.getElementById ("wordClue").innerHTML = answerFive
        winGame()

    }else if (input ==="u"){

        answerFive[3] = "u"
        document.getElementById ("wordClue").innerHTML = answerFive
        winGame()

    }else {

        console.log("wrong guess")
        wrongGuess()

        if (guessCount <= 0){

            console.log("lose!")
            document.getElementById("gamePort").innerHTML="You lose! Refresh and try again."
        }
        
    }

    // If Kirby, accept those letters


}else {

    console.log("Kirby was picked")

    if (input === "k") {

        answerFive[0]="k"
        document.getElementById ("wordClue").innerHTML = answerFive
        winGame()


    }else if (input === "i"){

        answerFive[1]="i"
        document.getElementById ("wordClue").innerHTML = answerFive
        winGame()

    }else if (input ==="r"){

        answerFive[2] = "r"
        document.getElementById ("wordClue").innerHTML = answerFive
        winGame()

    }else if (input ==="b"){

        answerFive[3] = "b"
        document.getElementById ("wordClue").innerHTML = answerFive
        winGame()

    }else if (input === "y"){

        answerFive[4] = "y"
        document.getElementById ("wordClue").innerHTML = answerFive
        winGame()
    }else {

        console.log("wrong guess")
        wrongGuess()    

        if (guessCount <= 0){

            console.log("lose!")
            document.getElementById("gamePort").innerHTML="You lose! Refresh and try again."
        }
        
    }
}

    

}
