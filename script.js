function getComputerChoice(){
    let rangeNumber = Math.random()*10 + ((Math.random()*10)%3);
    let choice = ""

    if(rangeNumber<=4){
        choice = "rock"
    }
    else if(rangeNumber<=8){
        choice = "paper"
    }
    else{
        choice = "scissor";
    }

    console.log(`Computer chose ${choice}`)
    return choice
}


