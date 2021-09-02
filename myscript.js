
function computerPlay() {
    const roll = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * roll.length);
    computerSelection = roll[random];
    return computerSelection.toUpperCase;
}

function userPlay() {
    let answer = prompt("Choose between: Rock, Paper, Scissors!");
    return answer.toUpperCase();
}

function confirmUserAnswer(answer) {
    switch (answer) {
        case "ROCK":
            playerSelection = answer;
            break;
        case "PAPER":
            playerSelection = answer;
            break;
        case "SCISSORS":
            playerSelection = answer;
            break;
        default:
            alert("Invalid Input, Try again.")
    }
}

function determineIfPlayerWon(playerSelection, computerSelection) {
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        return true
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        return true
    }
}

function playeriWinPrint() {
    alert("You won!!")
}

function playRound(playerSelection, computerSelection) {
    
}

/*
create a list: Rock, Paper, Scissors.
OR
create a varialbe Rock.
create a varialbe Paper.
create a varialbe Scissors.
create a function that will randomize the 3 variables.

create a prompt for the user to input text.
*/