
function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1
    if (randNum === 1) {
        return "rock"
    } else if (randNum === 2) {
        return "paper"
    } else if (randNum === 3) {
        return "scissors"
    }
}

function getHumanChoise() {
    let userChoice = prompt("Enter your Choice")
    return userChoice.toLowerCase()
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0

    function playRound(humanChoice, computerChoise) {
        if (humanChoice === "rock" && computerChoise === "scissors" ||
            humanChoice === "scissors" && computerChoise === "paper" ||
            humanChoice === "paper" && computerChoise === "scissors"
        ) {
            console.log(`You won!, ${humanChoice} beats ${computerChoise}`)
            humanScore++
        } else if (computerChoise === "rock" && humanChoice === "scissors" ||
            computerChoise === "scissors" && humanChoice === "paper" ||
            computerChoise === "paper" && humanChoice === "scissors") {
            console.log(`Computer won!, ${computerChoise} beats ${humanChoice}`)
            computerScore++
        } else {
            console.log("Its a tie!")
        }
    }
    for (let i = 1; i <= 5; i++) {
        let humanSelection = getHumanChoise()
        let computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }
}

playGame()