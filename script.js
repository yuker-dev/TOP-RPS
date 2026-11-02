// Players Score
let humanScore = 0
let robotScore = 0

// Robot choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  return computerChoice
}
// console.log(getComputerChoice())

// Human choice
function getHumanChoice() {
  let humanChoicePrompt = prompt("Rock, paper scissors?")
  let humanChoice = humanChoicePrompt.toLowerCase()

  if (humanChoice === "rock"){
    return humanChoice = 1
  }

  else if (humanChoice === "paper") {
    return humanChoice = 2
  }
  else if (humanChoice === "scissors") {
    return humanChoice = 3
  }
  else {
    alert("Please insert a valid answer.")
  }
}

// console.log(getHumanChoice())

// Play round logic
// Variables:
// x = humanChoice 
// y = computerChoice

function playRound(x, y) {

}