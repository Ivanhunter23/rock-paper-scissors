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
