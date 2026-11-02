// Players Score and variables
let humanScore = 0
let robotScore = 0
let computerChoice = ""
let humanChoice = ""

// Robot choice
function getComputerChoice() {
  return intComputerChoice = Math.floor(Math.random() * 3 + 1);
}
// console.log(computerChoice())

// Human choice
function getHumanChoice() {
  let humanChoicePrompt = prompt("Rock, paper scissors?")
  let humanChoice = humanChoicePrompt.toLowerCase()

  if (humanChoice === "rock"){
    return intHumanChoice = 1
  }

  else if (humanChoice === "paper") {
    return intHumanChoice = 2
  }

  else if (humanChoice === "scissors") {
    return intHumanChoice = 3
  }

  else {
    alert("Please insert a valid answer.")
  }
}

// console.log(intHumanChoice)

// Play round logic
// Variables:
// x = humanChoice 
// y = computerChoice

// Assign Int value a str value
function converter(number, variable) {
  if (number === 1) {
    return variable = "rock"
  }

  else if (number === 2) {
    return variable = "paper"
  }

  else {
    return variable = "scissors"
  }

}

// 1 = Rock
// 2 = Paper
// 3- = Scissors
intHumanChoice = getHumanChoice()
intComputerChoice = getComputerChoice()
computerChoice = converter(intComputerChoice, computerChoice)
humanChoice = converter(intHumanChoice, humanChoice)

function playRound(x, y) {
  if (x == 1 && y == 2 || x == 2 && y == 3 || x == 3 &&  y== 1) {
    return "You lost! " + computerChoice + " beats " + humanChoice + " ."
  }
  
  else if (x == 1 && y == 3 || x == 2 && y == 1 || x == 3 && y== 2) {
    return "You won!" + humanChoice + " beats " + computerChoice + " ."
  }

  else {
    return "It's a tie!"
  }
}


console.log(intHumanChoice)
console.log(intComputerChoice)
console.log(playRound(intHumanChoice, intComputerChoice))
