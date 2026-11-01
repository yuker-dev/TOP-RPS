function getComputerChoice() {
  let x = Math.floor(Math.random() * 3 + 1);

  if ((x = 1)) {
    let choice = "rock";
    return choice
  } else if ((x = 2)) {
    let choice = "paper";
    return choice
  } else {
    let choice = "scissors";
    return choice
  }
}
console.log(getComputerChoice())
