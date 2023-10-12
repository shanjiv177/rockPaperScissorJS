function playRound(playerChoice, compChoice){
    if (playerChoice==compChoice){
        console.log("It's a tie!")
    }
    else if (playerChoice=="rock" && compChoice=="paper"){
        console.log("You lose!")
    }
    else if (playerChoice=="rock" && compChoice=="scissor"){
        console.log("You win!")
    }
    else if (playerChoice=="scissor" && compChoice=="rock"){
        console.log("You lose!")
    }
    else if (playerChoice=="scissor" && compChoice=="paper"){
        console.log("You win!")
    }
    else if (playerChoice=="paper" && compChoice=="rock"){
        console.log("You win!")
    }
    else if (playerChoice=="paper" && compChoice=="scissor"){
        console.log("You lose!")
    }
}

function playerChoice(){
    playerCh = prompt("Enter your choice (Rock, paper or scissor) : ")
    return playerCh.toLowerCase()
}

function compChoice(){
    randNum = Math.round((Math.random() * 101)) % 3
    switch (randNum){
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissor"
    }
}

let game = () => {
    for (let i = 0; i<2; i++){
        pch = playerChoice()
        cch = compChoice()
        console.log("The computer chose " + cch)
        playRound(pch,cch)
    }
}


game()