// Function to randomly return "rock", "paper", or "scissors"
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]; // Array of possible choices
    const randomIndex = Math.floor(Math.random() * choices.length); // Generate a random index
    return choices[randomIndex]; // Return the choice at the random index
}

// Function to prompt the user for their choice and ensure it's valid
function getHumanChoice() {
    let choice = prompt("Please enter your choice: rock, paper, or scissors").toLowerCase(); // Prompt user for input and convert to lowercase

    // Validate user input
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors").toLowerCase(); // Re-prompt if input is invalid
    }

    return choice; // Return the valid choice
}





// Function to play a single round and determine the winner
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); // Ensure humanChoice is case-insensitive

    // Check for a tie
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
        return "tie"; // Return "tie" if both choices are the same
    } 
    // Check if the human wins
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
        return "human"; // Return "human" if human wins
    } 
    // Otherwise, the computer wins
    else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
        return "computer"; // Return "computer" if computer wins
    }
}

// Function to play 5 rounds and determine the overall winner
function playGame() {
    let humanScore = 0; // Initialize human score
    let computerScore = 0; // Initialize computer score

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice(); // Get human choice for the round
        const computerChoice = getComputerChoice(); // Get computer choice for the round
        const result = playRound(humanChoice, computerChoice); // Determine the round winner

        // Update scores based on round result
        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }
        
        console.log(`Round ${i + 1} result: Human: ${humanScore}, Computer: ${computerScore}`); // Log the current round result
    }

    // Declare the overall winner after 5 rounds
   // if (humanScore > computerScore) {
        console.log(`You win the game! Final Score -> Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose the game! Final Score -> Human: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final Score -> Human: ${humanScore}, Computer: ${computerScore}`);
    }
}

// Start the game
playGame(); // Call the playGame function to start the game
