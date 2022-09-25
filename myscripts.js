// Function to get randomly rock, paper or scissors
const getComputerChoice = function () {
  let number = Math.floor(Math.random() * 3) + 1;
  if (number === 1) {
    return "Rock";
  } else if (number === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
};

// Function for a single round
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return "It's a tie!";
  }
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return `You win! ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${computerSelection}!`;
  } else {
    return `You lose! ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    } beats ${playerSelection}!`;
  }
}

// Function for a 5 round game
function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Choose your weapon!");
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}
game();
