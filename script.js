// initial value
let computerScore = 0
let humanScore = 0
let Round = 0



// Get computer Choice
function getComputerChoice () {
    const choice = ["rock","paper","scissors"];
    //math.floor = down to the nearest integer ----- math.random * choice.length = radom number between 0 and choice lenght (3)
    return choice[Math.floor(Math.random() * choice.length)]; 

}

// look who's the winner

function playRound(humanChoice) {

    if (Round >= 5){
        return
    };
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

        // add div to display result

        const div = document.createElement("div");
        div.style.width = "400px";
        div.style.height ="50px";
        div.style.margin = "25px"
        div.style.border = "2px solid black";
        div.innerText = `Round: ${Round}, ${message} Human: ${humanChoice}, Computer: ${computerChoice}`;
        document.body.appendChild(div);

    
    if (Round >= 5) {
        const finalDiv = document.createElement("div");
        finalDiv.style.width = "400px";
        finalDiv.style.height = "150px";
        finalDiv.style.margin = "25px";
        finalDiv.style.border = "2px solid black";
        finalDiv.innerText = `Game Over! Final Score - Human: ${humanScore}, Computer: ${computerScore}`;
        document.body.appendChild(finalDiv);
    }
}






//get the human choice of button
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissors");

// call the function that play round
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click',() => playRound('paper'));
scissorButton.addEventListener('click',() => playRound('scissor'));

