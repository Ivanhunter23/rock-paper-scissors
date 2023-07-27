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
function playRound(playerSelection, computerSelection){
    if(typeof playerSelection !== 'string'){
        console.log("Numbers are not valid") 
    }
    if(playerSelection.toLowerCase() ==="rock" && computerSelection === "Rock"){
        console.log("Rock ties with Rock");
    }
    if(playerSelection.toLowerCase() ==="rock" && computerSelection === "Paper"){
        console.log("You lose! Rock loses to Paper");
    }
    if(playerSelection.toLowerCase() ==="rock" && computerSelection === "Scissors"){
        console.log("You WIN! Rock smashes Scissors!");
        return "Win";
    }
    if(playerSelection.toLowerCase() ==="paper" && computerSelection === "Rock"){
        console.log("You WIN! Paper beats Rock");
        return "Win";
    }
    if(playerSelection.toLowerCase() ==="paper" && computerSelection === "Paper"){
        console.log("Paper ties with Paper");
    }
    if(playerSelection.toLowerCase() ==="paper" && computerSelection === "Scissors"){
        console.log("You lose! Paper loses to Scissors");
    }
    if(playerSelection.toLowerCase() ==="scissors" && computerSelection === "Rock"){
        console.log("You lose! Scissors lose to Rock");
    }
    if(playerSelection.toLowerCase() ==="scissors" && computerSelection === "Paper"){
        console.log("You WIN! Scissors cut Paper")
        return "Win";
    }
    if(playerSelection.toLowerCase() ==="scissors" && computerSelection === "Scissors"){
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
        }else{
            ComputerWinCounter++;
        }
        

    }
    console.log(`Player wins: ${PlayerWinCounter} \nComputer wins:${ComputerWinCounter}`)
        
}