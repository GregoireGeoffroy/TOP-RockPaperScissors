function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Please enter your choice: rock, paper, or scissors").toLowerCase();

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors").toLowerCase();
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
        return "human";
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
        return "computer";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }
        
        console.log(`Round ${i + 1} result: Human: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log(`You win the game! Final Score -> Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose the game! Final Score -> Human: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final Score -> Human: ${humanScore}, Computer: ${computerScore}`);
    }
}

// Start the game
playGame();
