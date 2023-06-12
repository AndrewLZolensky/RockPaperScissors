/*initialize scores and round*/
let userScore = 0;
let computerScore = 0;
let round = 1;

/*make buttons launch rps against computer*/
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let playButtons = new Array(rock, paper, scissors);

for (let btn of playButtons) {
    btn.addEventListener("click", updateGame);
}

/* User plays button:
    1. Play round against computer
        a. Computer choice
        b. Computer vs. input
        c. Update scores
    2. If tie, print tie to message board, then skip to next round
    2. If not tie
        a. If anyone with score = 3, print winner of game to message bar, update round to 0
        b. If nobody with score = 3, print winner of round to message bar, update round +1
*/
function updateGame(e) {


    /*get user choice*/
    let userChoice = e.currentTarget.id;
    console.log(`user chooses: ${userChoice}`);

    /*get computer choice*/
    let computerChoice = getComputerChoice();
    console.log(`computer chooses: ${computerChoice}`);

    /*get game result*/
    let result = getWinner(userChoice, computerChoice);

    /*check result and update game parameters*/
    checkResult(result, userChoice, computerChoice);


}


function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const ix = Math.floor(Math.random() * 3);
    return options[ix];
}

function getWinner(playerGuessRaw, machineGuessRaw) {
    const playerGuess = playerGuessRaw.toLowerCase();
    const machineGuess = machineGuessRaw.toLowerCase();

    if (playerGuess == machineGuess) {
        console.log("You both played " + playerGuess + ", it's a tie!")
        return "tie";
    } else if (playerGuess == "rock" && machineGuess == "scissors") {
        console.log("You played " + playerGuess + ", but the computer played " +
            machineGuess + ". You win!")
        return "win";
    } else if (playerGuess == "rock" && machineGuess == "paper") {
        console.log("You played " + playerGuess + ", but the computer played " +
            machineGuess + ". You lose!")
        return "lose";
    } else if (playerGuess == "scissors" && machineGuess == "paper") {
        console.log("You played " + playerGuess + ", but the computer played " +
            machineGuess + ". You win!")
        return "win";
    } else if (playerGuess == "scissors" && machineGuess == "rock") {
        console.log("You played " + playerGuess + ", but the computer played " +
            machineGuess + ". You lose!")
        return "lose";
    } else if (playerGuess == "paper" && machineGuess == "scissors") {
        console.log("You played " + playerGuess + ", but the computer played " +
            machineGuess + ". You lose!")
        return "lose";
    } else {
        console.log("You played " + playerGuess + ", but the computer played " +
            machineGuess + ". You win!")
        return "win";
    }
}

function checkResult(result, userChoice, computerChoice) {
    if (result == "tie") {
        document.getElementById("message").textContent = `User played ${userChoice}, and computer played ${computerChoice}, resulting in a tie.`;
    } else if (result == "win") {
        userScore++;
        if (userScore == 3) {
            document.getElementById("message").textContent = `User played ${userChoice}, and computer played ${computerChoice}. User wins!`;
            round = 0;
            userScore = 0;
            computerScore = 0;
            document.getElementById("round").textContent = `Round ${round}`;
        } else {
            document.getElementById("message").textContent = `User played ${userChoice}, and computer played ${computerChoice}. User gains 1 point!`;
            round++;
            document.getElementById("round").textContent = `Round ${round}`;
        }
        document.getElementById("player-score").textContent = `Player: ${userScore}`;
        document.getElementById("computer-score").textContent = `Computer: ${computerScore}`;
    } else {
        computerScore++;
        if (computerScore == 3) {
            document.getElementById("message").textContent = `User played ${userChoice}, and computer played ${computerChoice}. Computer wins`;
            round = 0;
            userScore = 0;
            computerScore = 0;
            document.getElementById("round").textContent = `Round ${round}`;
        } else {
            document.getElementById("message").textContent = `User played ${userChoice}, and computer played ${computerChoice}. Computer gains 1 point.`;
            round++;
            document.getElementById("round").textContent = `Round ${round}`;
            document.getElementById("computer-score").textContent = `Computer: ${computerScore}`;
        }
        document.getElementById("player-score").textContent = `Player: ${userScore}`;
        document.getElementById("computer-score").textContent = `Computer: ${computerScore}`;
    }
}