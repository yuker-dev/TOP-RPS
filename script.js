// Players Score and variables
let humanScore = 0
let robotScore = 0
let intHumanChoice = 0
let intComputerChoice = 0
let humanChoice = ""
let computerChoice = ""

// Robot choice
function getComputerChoice() {
  let intComputerChoice = Math.floor(Math.random() * 3 + 1);

   if ((intComputerChoice = 1)) {
    let computerChoice = "rock";
    return computerChoice, intComputerChoice

  } else if ((intComputerChoice = 2)) {
    let computerChoice = "paper";
    return computerChoice, intComputerChoice

  } else {
    let computerChoice = "scissors";
    return computerChoice, intComputerChoice
  }
  
}
console.log(computerChoice)

// Human choice
function getHumanChoice() {
  let humanChoicePrompt = prompt("Rock, paper scissors?")
  let humanChoice = humanChoicePrompt.toLowerCase()

  if (humanChoice === "rock"){
    let intHumanChoice = 1
    return intHumanChoice, humanChoice
  }

  else if (humanChoice === "paper") {
    let intHumanChoice = 2
    return intHumanChoice, humanChoice
  }

  else if (humanChoice === "scissors") {
    let intHumanChoice = 3
    return intHumanChoice, humanChoice
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


// 1 = Rock
// 2 = Paper
// 3- = Scissors

function playRound(x, y) {
  if (x == 1 && y == 2 || x == 2 && y == 3 || x == 3 &&  y== 1) {
    return "You lost! " + computerChoice + "beats " + humanChoice + "."
  }
  
  else if (x == 1 && y == 3 || x == 2 && y == 1 || x == 3 && y== 2) {
    return "You won!" + humanChoice + "beats" + computerChoice + "."
  }

  else {
    return "It's a tie!"
  }
}

getHumanChoice()
getComputerChoice()
console.log(humanChoice)
console.log(computerChoice)
console.log(playRound(intHumanChoice, intComputerChoice))

//FIXME: intHumanChoice is not defined
//FIXME: There should be another error with intComputerChoice