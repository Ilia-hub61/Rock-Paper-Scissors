function getComputerChoice() {
  let number = Math.floor(Math.random() * 100);
  if (number < 34) {
    return "Rock";
  } else if (number < 67) {
    return "Scissors";
  } else {
    return "Paper";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "rock") {
      return "Draw. Rock does not beat rock";
    } else if (computerSelection === "scissors") {
      return "Win. Rock beats scissors";
    } else {
      return "Lose. Paper beats rock";
    }
  }
  if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "paper") {
      return "Draw. Paper does not beat paper";
    } else if (computerSelection === "rock") {
      return "Win. Paper beats rock";
    } else {
      return "Lose. Scissors beats paper";
    }
  }
  if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "scissors") {
      return "Draw. Scissors does not beat Scissors";
    } else if (computerSelection === "paper") {
      return "Win! Scissors beats paper";
    } else {
      return "Lose! Rock beats scossors";
    }
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function game() {
  let result = "";
  let compRes = 0;
  let playerRes = 0;
  let compTurn = "";
  let playerTurn = "";
  for (let i = 0; i < 5; i++) {
    compTurn = getComputerChoice();
    playerTurn = playerSelection;
    result = playRound(compTurn, playerTurn);
    if (result.includes("Win")) {
      playerRes += 1;
    } else if (result.includes("Lose")) {
      compRes += 1;
    } else {
      i -= 1;
    }
    console.log(result + " score " + playerRes + " : " + compRes);
  }
  if (playerRes > compRes) {
    console.log("You win", playerRes + ":" + compRes);
  } else {
    console.log("You lose", compRes, +":" + playerRes);
  }
}

game();
