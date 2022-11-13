//computer picks randomly between rock, paper, scissors
function computerPlay() {
    
    let num = Math.random();

    if(num < 0.333) {

        return "rock";

    } else if(num >= 0.333 && num < 0.666) {

        return "paper";

    } else {

        return "scissors";

    }

}

// adds points and determines round
function playRound(playerSelection, computerSelection) {

    if(playerSelection.toLowerCase() === computerSelection) {

        return "Tie";

    } else if(playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {

        playerPoints ++
        return "Player WINS the round.";

    } else if(playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {

        playerPoints ++
        return "Player WINS the round.";

    } else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {

        playerPoints ++
        return "Player WINS the round.";

    } else {

        computerPoints++;
        return "Computer WINS the round.";

    }

}

let playerPoints = 0;
let computerPoints = 0;

// 5 rounds
function game() {
    
    for (let i = 0; i < 5; i++) {
    
        let playerSelection = prompt("Rock, paper or scissors?");
        const computerSelection = computerPlay();

        console.log("Computer picks " + computerPlay())
        console.log("Player picks " + playerSelection)
        console.log(playRound(playerSelection, computerSelection))
        console.log("Player points: " + playerPoints)
        console.log("Computer points: " + computerPoints)
    }

}

game();

// game winner
function result() {
    
    if(playerPoints > computerPoints) {

        return "VICTORY! Congratulations."

    } else if(playerPoints < computerPoints) {

        return "DEFEAT! Oh, that's too bad."

    }

}

console.log(result());