// Returns Rock,Paper or Scissors randomly to use in the playRound function 
function getComputerChoice(){
    let option = Math.floor(Math.random()* 3);

    if (option === 0){
        return "Rock";
    }else if (option ===1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
//Simulates a round of Rock Paper Scissors with the value from getComputerChoice() and a value which the player inputs
function playRound(playerSelection, computerSelection){
    if(typeof playerSelection !== 'string'){
        console.log("Numbers are not valid") 
    }

    else if(playerSelection.toLowerCase() ==="rock" && computerSelection === "Rock"){
        console.log("Rock ties with Rock");
        

    }
    else if(playerSelection.toLowerCase() ==="rock" && computerSelection === "Paper"){
        console.log("You lose! Rock loses to Paper");
        return "Loss";
    }
    else if(playerSelection.toLowerCase() ==="rock" && computerSelection === "Scissors"){
        console.log("You WIN! Rock smashes Scissors!");
        return "Win";
    }
    else if(playerSelection.toLowerCase() ==="paper" && computerSelection === "Rock"){
        console.log("You WIN! Paper beats Rock");
        return "Win";
    }
    else if(playerSelection.toLowerCase() ==="paper" && computerSelection === "Paper"){
        console.log("Paper ties with Paper");
    }
    else if(playerSelection.toLowerCase() ==="paper" && computerSelection === "Scissors"){
        console.log("You lose! Paper loses to Scissors");
        return "Loss";

    }
    else if(playerSelection.toLowerCase() ==="scissors" && computerSelection === "Rock"){
        console.log("You lose! Scissors lose to Rock");
        return "Loss";

    }
    else if(playerSelection.toLowerCase() ==="scissors" && computerSelection === "Paper"){
        console.log("You WIN! Scissors cut Paper")
        return "Win";
    }
    else if(playerSelection.toLowerCase() ==="scissors" && computerSelection === "Scissors"){
        console.log("Scissors tie with Scissors")
    }
}
function game(){
    let PlayerWinCounter = 0;
    let ComputerWinCounter = 0;
    for(let i = 0; i<5; i++){
        let playerSelection = prompt("Enter Rock Paper or Scissors");
        const computerSelection = getComputerChoice();
        let result =playRound(playerSelection,computerSelection);
        if (result == "Win"){
            PlayerWinCounter++;
        }else if (result == "Loss"){
            ComputerWinCounter++;
        }
        

    }
    console.log(`Player wins: ${PlayerWinCounter} \nComputer wins:${ComputerWinCounter}`)
        
}