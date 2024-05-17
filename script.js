let computerScore = 0, humanScore = 0

const winMap = new Map();

winMap.set("rock", "scissor");
winMap.set("paper", "rock");
winMap.set("scissor", "paper");




function getComputerChoice() {
    let rangeNumber = Math.random() * 10 + ((Math.random() * 10) % 3);
    let choice = ""

    if (rangeNumber <= 4) {
        choice = "rock"
    }
    else if (rangeNumber <= 8) {
        choice = "paper"
    }
    else {
        choice = "scissor";
    }

    return choice
}


// function getHumanChoice() {
//     let choice = prompt("Rock, papers or scissors?", "rock")
//     choice = choice.toLowerCase();

//     return choice;
// }

function determineWinner(humanChoice, computerChoice) {
    let result = ""
    if (humanChoice === computerChoice) {
        result = "Tie round"
    }
    else if (computerChoice === winMap.get(humanChoice)) {
        result = "Human wins round"
    }
    else {
        result = "Computer wins round"
    }
    return result
}


function playRound(e) {
    const computerChoice = getComputerChoice()
    const humanChoice = e.target.textContent.toLowerCase()

    console.log(`Computer chose ${computerChoice}`)

    let result = determineWinner(humanChoice, computerChoice);

    console.log(result)

    if (result.includes("Computer")) {
        computerScore += 1
    }
    else if (result.includes("Human")) {
        humanScore += 1
    }


    compChoice.textContent = `Computer chose ${computerChoice}`

    resultSpan.textContent = result




    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore >= 5) {
            resultSpan.textContent = "You win the game!!!"
        }
        else {
            resultSpan.textContent = "Computer wins the game!!!"
        }

        disableChoices(true)

        addResetButton()



    }


    score.textContent = `Current scores : You ${humanScore} Computer ${computerScore}`



    return result
}

function disableChoices(value) {
    const choiceButtons = choice.children

    const childArrray = Array.from(choiceButtons);

    childArrray.forEach(i => {
        i.disabled = value
    })
}

function addResetButton() {
    const resetButton = document.createElement("button")

    resetButton.textContent = "Reset game"

    resetButton.id = "Reset"

    resetButton.addEventListener("click", resetGame)
    
    body.appendChild(resetButton)
}

function resetGame() {

    humanScore = 0, computerScore = 0
    compChoice.textContent = ""
    resultSpan.textContent = "Start Game"
    score.textContent = ""
    disableChoices(false)
    document.querySelector("#Reset").remove()
}

// function playgame() {
//     humanScore = 0
//     computerScore = 0

//     // console.log(`Final score : You ${humanScore} Computer ${computerScore}`)
// }

const choice = document.querySelector(".Choices")
const compChoice = document.querySelector("#CompChoice")
const resultSpan = document.querySelector("#Result")
const score = document.querySelector("#Score")
const body = document.querySelector("body")


choice.addEventListener("click", playRound)




