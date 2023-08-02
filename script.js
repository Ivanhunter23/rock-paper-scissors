const results = document.querySelector("#results");
let pScore = 0;
let cScore = 0;
//Buttons
const buttons = document.querySelectorAll("button");

function showResult(result,pSelection,cSelection){

    const createP = document.createElement('p');
    switch(result){
        case "Win":
        pScore++;
        createP.textContent = `You WIN!${pSelection} beats ${cSelection}\nPlayer Score = ${pScore}\nComputer Score = ${cScore}`;
        createP.style.color = "green";
        results.appendChild(createP);
        break;

        case "Loss":
        cScore++;
        createP.textContent = `You LOSE!${cSelection} beats ${pSelection}\nPlayer Score = ${pScore}\nComputer Score = ${cScore}`;
        createP.style.color = "red";
        results.appendChild(createP);
        break;

        case "Tie":
        createP.textContent = `You TIED! ${pSelection} ties with ${cSelection}\nPlayer Score = ${pScore}\nComputer Score = ${cScore}`;
        createP.style.color = "grey";
        results.appendChild(createP);
        break;
    }
}

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        if(button.id === "rock"){
            playRound("rock",getComputerChoice());
        }else if(button.id === "paper"){
            playRound("paper",getComputerChoice());
        }else if(button.id === "scissors"){
            playRound("scissors",getComputerChoice());
        }
    });
  });

// Returns Rock,Paper or Scissors randomly to use in the playRound function 
function getComputerChoice(){
    let option = Math.floor(Math.random()* 3);

    if (option === 0){
        return "rock";
    }else if (option ===1) {
        return "paper";
    } else {
        return "scissors";
    }
}

//Simulates a round of Rock Paper Scissors with the value from getComputerChoice() and a value which the player inputs
function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock" && computerSelection === "rock"){
        return showResult("Tie",playerSelection,computerSelection);
    }
    else if(playerSelection === "rock" && computerSelection === "paper"){
        return showResult("Loss",playerSelection,computerSelection);        
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        return showResult("Win",playerSelection,computerSelection);        
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return showResult("Win",playerSelection,computerSelection);        
    }
    else if(playerSelection === "paper" && computerSelection === "paper"){
        return showResult("Tie",playerSelection,computerSelection);
    }
    else if(playerSelection === "paper" && computerSelection === "scissors"){
        return showResult("Loss",playerSelection,computerSelection);        
    }
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        return showResult("Loss",playerSelection,computerSelection);        
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return showResult("Win",playerSelection,computerSelection);        
    }
    else if(playerSelection === "scissors" && computerSelection === "scissors"){
        return showResult("Tie",playerSelection,computerSelection);
    }
}
