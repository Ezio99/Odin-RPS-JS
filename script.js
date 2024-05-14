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


function getHumanChoice() {
    let choice = prompt("Rock, papers or scissors?", "rock")
    choice = choice.toLowerCase();

    return choice;
}

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


function playRound() {
    const computerChoice = getComputerChoice()
    const humanChoice = getHumanChoice()

    console.log(`Computer chose ${computerChoice}`)

    let result = determineWinner(humanChoice,computerChoice);

    console.log(result)

    if(result.includes("Computer")){
        computerScore+=1
    }
    else if(result.includes("Human")){
        humanScore+=1
    }

    console.log(`Current scores : You ${humanScore} Computer ${computerScore}`)

    return result
}

function playgame(){
    humanScore=0
    computerScore=0
    for(let i=1;i<=5;i++){
        console.log(`Round ${i}`)
        if(playRound().includes("Tie")){
            console.log(`Replaying round ${i}` )
            i--;
        }
    }

    console.log(`Final score : You ${humanScore} Computer ${computerScore}`)
}

playgame()




