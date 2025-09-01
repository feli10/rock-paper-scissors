let choices = ["rock", "paper", "scissors"];

const playerSelect = document.getElementById("playerSelect");
const playButton = document.getElementById("playButton");

let playerChoice = "";
let computerChoice = "";
let result = false;

function setPlayerChoice() {
  playerChoice = playerSelect.value;
  console.log("Player chose: " + playerChoice);
}

function setComputerChoice() {
  let r = Math.floor(Math.random() * 3);
  computerChoice = choices[r];
  console.log("Computer chose: " + computerChoice);
}

function play() {
  setPlayerChoice();
  setComputerChoice();

  if (playerChoice == computerChoice) {
    console.log("TIE");
  }
  else if (playerChoice == "rock") {
    if (computerChoice == "scissors") {
      console.log("YOU WIN");
    }
    else {
      console.log("YOU LOSE");
    }
  }
  else if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      console.log("YOU WIN");
    }
    else {
      console.log("YOU LOSE");
    }
  }
  else if (playerChoice == "scissors") {
    if (computerChoice == "paper") {
      console.log("YOU WIN");
    }
    else {
      console.log("YOU LOSE");
    }
  }
}
 
playButton.addEventListener("click", play);
