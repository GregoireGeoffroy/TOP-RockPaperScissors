// Logic to get the computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Logic to get the human choice
function getHumanChoice() {
    let choice = prompt("Please enter your choice: rock, paper, or scissors").toLowerCase();

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors").toLowerCase();
    }

    return choice;
}

// Declare the players score  variables
let humanScore = 0;
let computerScore = 0;

// Logic to play a single round
function playRound(humanChoice, computerChoice) {
    // your code here!
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  



// Logic to play entire game