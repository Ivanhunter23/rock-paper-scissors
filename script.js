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
        createP.textContent = `You WIN! ${pSelection} beats ${cSelection}\nPlayer Score = ${pScore}\nComputer Score = ${cScore}`;
        createP.style.color = "green";
        createP.style.whiteSpace ="pre"; //Makes it so \n jumps line properly
        results.appendChild(createP);
        if(pScore == 5){
            let winP = document.createElement('p')
            winP.textContent = `You WIN! Player wins \nPlayer Score = ${pScore}\nComputer Score = ${cScore}`;
            winP.style.color = "green";
            winP.style.whiteSpace ="pre"; //Makes it so \n jumps line properly
            results.appendChild(winP);
        }
        break;

        case "Loss":
        cScore++;
        createP.textContent = `You LOSE! ${cSelection} beats ${pSelection}\nPlayer Score = ${pScore}\nComputer Score = ${cScore}`;
        createP.style.color = "red";
        createP.style.whiteSpace ="pre";
        results.appendChild(createP);
        if(cScore == 5){
            let winP = document.createElement('p')
            winP.textContent = `You LOST! Computer won \nPlayer Score = ${pScore}\nComputer Score = ${cScore}`;
            winP.style.color = "red";
            winP.style.whiteSpace ="pre"; //Makes it so \n jumps line properly
            results.appendChild(winP);
        }
        
        break;

        case "Tie":
        createP.textContent = `You TIED! ${pSelection} ties with ${cSelection}\nPlayer Score = ${pScore}\nComputer Score = ${cScore}`;
        createP.style.color = "grey";
        createP.style.whiteSpace ="pre";
        results.appendChild(createP);
        break;
    }
}

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        if(button.id === "rock"){
            playRound("Rock",getComputerChoice());
        }else if(button.id === "paper"){
            playRound("Paper",getComputerChoice());
        }else if(button.id === "scissors"){
            playRound("Scissors",getComputerChoice());
        }
    });
  });

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
    if(playerSelection === "Rock" && computerSelection === "Rock"){
        return showResult("Tie",playerSelection,computerSelection);
    }
    else if(playerSelection === "Rock" && computerSelection === "Paper"){
        return showResult("Loss",playerSelection,computerSelection);        
    }
    else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        return showResult("Win",playerSelection,computerSelection);        
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        return showResult("Win",playerSelection,computerSelection);        
    }
    else if(playerSelection === "Paper" && computerSelection === "Paper"){
        return showResult("Tie",playerSelection,computerSelection);
    }
    else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        return showResult("Loss",playerSelection,computerSelection);        
    }
    else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        return showResult("Loss",playerSelection,computerSelection);        
    }
    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        return showResult("Win",playerSelection,computerSelection);        
    }
    else if(playerSelection === "Scissors" && computerSelection === "Scissors"){
        return showResult("Tie",playerSelection,computerSelection);
    }
}
