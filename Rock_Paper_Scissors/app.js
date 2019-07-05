let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


function getComputerChoise(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userC, computerC){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    document.getElementById(userC).classList.add('green-glow');
    setTimeout(function() {
        console.log("+");
        document.getElementById(userC).classList.remove('green-glow')}, 1000);
    userC= userC[0].toUpperCase() + userC.slice(1);
    computerC = computerC[0].toUpperCase() + computerC.slice(1);
    result_div.innerHTML = userC + " beets " + computerC +". You Win!";
    
} 

function lose(userC, computerC) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    userC = userC[0].toUpperCase() + userC.slice(1);
    computerC = computerC[0].toUpperCase() + computerC.slice(1);
    result_div.innerHTML = computerC + " beets " + userC + ". You Loose!"
}

function draw(userC, computerC) {
    result_div.innerHTML = " Draw!! ";
}

function game(userChoise) {
    const computerChoise = getComputerChoise();
    switch (userChoise + computerChoise) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoise, computerChoise);
            break;
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            lose(userChoise, computerChoise);    
            break;
        case 'scissorsscissors':
        case 'rockrock':
        case 'paperpaper':
            draw(userChoise, computerChoise);
            break;
    }
}

function main(){
    rock_div.addEventListener('click', function() {
        game('rock');
    })
    paper_div.addEventListener('click', function () {
        game('paper');
    })
    scissors_div.addEventListener('click', function () {
        game('scissors');
    })
}

main();


