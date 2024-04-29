//console.log("Hello world");
let humChoice = "";      //Variable for the user's choice
let comScore = 0;        //Score to be updated when playing
let humScore = 0;        //Score to be updated when playing

//Has a 1/3 chance to change the computer's decision to paper or rock respectively
function getComputerChoice(){

    let comChoice = "rock";  //Variable to initialize the computer's decision
    let randomNum = Math.random();

    if (randomNum >= 0.666){
        comChoice = "paper";
    }
    else if (randomNum <= 0.333){
        comChoice = "scissors";
    }

    return comChoice;
}

//console.log(getComputerChoice());

//User gets to make their choice
function getHumanChoice(){
    
    const humChoice = document.getElementById('choice').value.toLowerCase();
    
    console.log(humChoice);

    return humChoice;
}


function playRound(){

    humChoice = getHumanChoice();
    comChoice = getComputerChoice();

    if (humChoice === comChoice){
        console.log("Draw!");
    }
    else if (humChoice === "rock"){
        if (comChoice === "paper"){
            console.log("You lose");
            comScore++;
        }
        else if (comChoice === "scissors"){
            console.log("You win!");
            humScore++;
        }
    }
    else if (humChoice === "paper"){
        if (comChoice === "rock"){
            console.log("You win!");
            humScore++;
        }
        else if (comChoice === "scissors"){
            console.log("You lose");
            comScore++;
        }
    }
    else if (humChoice === "scissors"){
        if (comChoice === "rock"){
            console.log("You lose");
            comScore++;
        }
        else if (comChoice === "paper"){
            console.log("You win!");
            humScore++;
        }
    }
    else {
            alert("Error, must type rock, paper, or scissors");
    }

    console.log("You have " + humScore + " points, the computer has " + comScore + " points!");
    document.getElementById("result").innerHTML="You have " + humScore + " points, the computer has " + comScore + " points!";
}


    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('enter').addEventListener('click', playRound);
    });




//alert("is this working");
