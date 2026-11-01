// Players Score
let humanScore = 0
let robotScore = 0

// Robot choice
function getComputerChoice() {
  let x = Math.floor(Math.random() * 3 + 1);

  if ((x = 1)) {
    let robotChoice = "rock";
    return robotChoice
  } else if ((x = 2)) {
    let robotChoice = "paper";
    return robotChoice
  } else {
    let robotChoice = "scissors";
    return robotChoice
  }
}
// console.log(getComputerChoice())

// Human choice
// let humanChoicePrompt = prompt("Rock, paper scissors?")

function getHumanChoice(humanChoice) {
  return humanChoice
}

// console.log(getHumanChoice(humanChoicePrompt))

