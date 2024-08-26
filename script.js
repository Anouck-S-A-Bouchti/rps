// initial value
let computerScore = 0
let humanScore = 0
let Round = 0

function getHumanChoice() {


    // Ask for human choice
    let humanChoice = prompt("Choose between Rock, Paper, scissors").toLocaleLowerCase();

    //validation of humanChoice
    while (!["rock","paper","scissors"].includes(humanChoice)){
        alert("invalid choices, please choose between rock, paper, scissors");
        humanChoice= prompt("Enter your choice between rock, paper, scissors").toLocaleLowerCase();
    };
}

// Get computer Choice
function getComputerChoice () {
    const choice = ["rock","paper","scissors"];
    //math.floor = down to the nearest integer ----- math.random * choice.length = radom number between 0 and choice lenght (3)
    return choice[Math.floor(Math.random() * choice.length)]; 

}

// look who's the winner

function playRound() {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    let message = "";

    if(humanChoice === computerChoice){
        message = "It's a tie !";
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors")  ||
        (humanChoice === "paper" && computerChoice === "rock" )    ||
       ( humanChoice === "scissors" && computerChoice === "paper" )
    )
    {
        message = "human beat computer!"
        humanScore ++
    }
    else{
        message = "Computer win!"
        computerScore++
    }
    Round++;

    console.log(`Round: ${Round}, ${message} Human: ${humanChoice}, Computer: ${computerChoice}`);
}
playRound();
