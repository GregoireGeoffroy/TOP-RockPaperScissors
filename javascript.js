// Function to randomly return "rock", "paper", or "scissors"
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round and determine the winner
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    // Check for a tie
    if (humanChoice === computerChoice) {
        return `It's a tie! Both chose ${humanChoice}`;
    } 
    // Check if the human wins
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`;
    } 
    // Otherwise, the computer wins
    else {
        computerScore++;
        return `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`;
    }
}

let humanScore = 0;
let computerScore = 0;

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");
    const resultsDiv = document.querySelector("#results");
    const scoreDiv = document.querySelector("#score");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const humanChoice = button.id;
            const computerChoice = getComputerChoice();
            const result = playRound(humanChoice, computerChoice);
            
            resultsDiv.textContent = result;
            scoreDiv.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;

            if (humanScore === 5) {
                resultsDiv.textContent = "Congratulations! You won the game!";
                resetGame();
            } else if (computerScore === 5) {
                resultsDiv.textContent = "Sorry! The computer won the game.";
                resetGame();
            }
        });
    });
});

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}
