// Inital variables
let computerChoice = "";
let humanChoice = "";
let intComputerChoice = 0;
let intHumanChoice = 0;

// Robot choice
function getComputerChoice() {
  return (intComputerChoice = Math.floor(Math.random() * 3 + 1));
}
// console.log(computerChoice())

// Human choice
function getHumanChoice() {
  let humanChoicePrompt = prompt("Rock, paper scissors?");
  let humanChoice = humanChoicePrompt.toLowerCase();

  if (humanChoice === "rock") {
    return 1;
  } else if (humanChoice === "paper") {
    return 2;
  } else if (humanChoice === "scissors") {
    return 3;
  } else {
    alert("Please insert a valid answer.");
  }
}

// console.log(intHumanChoice)

// Play round logic
// Variables:
// intHumanChoice = humanChoice
// y = computerChoice

// Assign Int value a str value
function converter(number, variable) {
  if (number === 1) {
    return (variable = "rock");
  } else if (number === 2) {
    return (variable = "paper");
  } else if (number === 3) {
    return (variable = "scissors");
  }
}

// 1 = Rock
// 2 = Paper
// 3- = Scissors

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(x, y) {
    if ((x == 1 && y == 2) || (x == 2 && y == 3) || (x == 3 && y == 1)) {
      computerScore += 1;
      console.log(
        "You lost this round! " +
          computerChoice +
          " beats " +
          humanChoice +
          " .",
      );
      return;
    } else if ((x == 1 && y == 3) || (x == 2 && y == 1) || (x == 3 && y == 2)) {
      humanScore += 1;
      console.log(
        "You won this round! " +
          humanChoice +
          " beats " +
          computerChoice +
          " .",
      );
      return;
    } else {
      console.log("It's a tie!");
      return;
    }
  }

  for (let nbrRound = 0; nbrRound < 5; nbrRound++) {
    let intHumanChoice = getHumanChoice();
    console.log("inside loop:", intHumanChoice);
    let intComputerChoice = getComputerChoice();
    computerChoice = converter(intComputerChoice, computerChoice);
    humanChoice = converter(intHumanChoice, humanChoice);

    playRound(intHumanChoice, intComputerChoice);

    console.log(humanChoice);
    console.log(computerChoice);
  }

  if (humanScore > computerScore) {
    console.log(
      "You won the game! ( " + humanScore + " to " + computerScore + " )",
    );
  } else if (humanScore < computerScore) {
    console.log(
      "You lost this game :( . ( " + computerScore + " to " + humanScore + " )",
    );
  } else {
    console.log("It's a tie! ( " + humanScore + " to " + computerScore + " )");
  }
}

playGame();
console.log("global:", intHumanChoice);
