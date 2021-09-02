
const WIN = "WIN"
const TIE = "TIE"
const LOSE = "LOSE"

function computerPlay() {
    const roll = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * roll.length);
    computerSelection = roll[random];
    return computerSelection.toUpperCase();
}

function userPlay() {
    let answer = prompt("Choose between: Rock, Paper, Scissors!");
    answer = answer.toUpperCase();
    confirmUserAnswer(answer)
    return answer
}

function confirmUserAnswer(answer) {
    switch (answer) {
        case "ROCK":
            
            break
        case "PAPER":
            
            break;
        case "SCISSORS":
            
            break
        default:
            alert("Invalid Input, Try again.")
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
        winText = "You win, Rock beats Scissors!"
        console.log(winText)
        return WIN
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        winText = "You win, Paper beats Rock!"
        console.log(winText)
        return WIN
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        winText = "You win, Scissors beats Paper!"
        console.log(winText)
        return WIN
    }
    else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
        tieText = "It's a Tie!"
        console.log(tieText)
        return TIE
    }
    else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
        tieText = "It's a Tie!"
        console.log(tieText)
        return TIE
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        tieText = "It's a Tie!"
        console.log(tieText)
        return TIE
    }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        loseText = "You lose, Paper beats Rock!"
        console.log(loseText)
        return LOSE
    }
    else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        loseText = "You lose, Scissors beats Paper!"
        console.log(loseText)
        return LOSE
    }
    else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        loseText = "You lose, Rock beats Scissors!"
        console.log(loseText)
        return LOSE
    }
    else {
        console.log("ERROR.")
    }
}


function game() {
    let score = 0
    for (let i = 0; i < 5; i++) {
        
        let playerSelection = userPlay()
        let computerSelection = computerPlay()
        let result = playRound(playerSelection, computerSelection)
        
        if (result == WIN) {
            score = score + 1
        }
        else if (result == LOSE) {
            score = score - 1
        }
        console.log("Player score: " + score) 
    }
   

    if (score > 0) {
    console.log("Player Wins")
    }
    else if (score === 0) {
    console.log("It's a tie, no one wins.")
    }
    else
    console.log("Player Loses")
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