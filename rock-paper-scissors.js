let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    });
});

function getComputerChoice() {
    let randomNumber = 0;

    while (randomNumber < 1) {
        randomNumber = Math.random() * 100;
        randomNumber = Math.floor(randomNumber);
    }

    if (0 < randomNumber && randomNumber <= 33) {
        return 'rock';
    }

    else if (33 < randomNumber && randomNumber <= 66) {
        return 'paper';
    }

    else if (66 < randomNumber && randomNumber <= 99) {
        return 'scissors';
    }

    else {
        console.log('Computer could not make selection');
    }
}


function playRound(humanChoice, computerChoice) {
    const roundResult = document.querySelector("#round-result");
    if (humanChoice === computerChoice) {
        roundResult.textContent = "It's a tie!";
    }

    else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            roundResult.textContent = 'Paper covers rock! You lose!';
            computerScore++;
        }

        else if (computerChoice === 'scissors') {
            roundResult.textContent = 'Rock smashes scissors! You win!';
            humanScore++;
        }
    }

    else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            roundResult.textContent = 'Scissors cut paper! You lose!';
            computerScore++;
        }

        else if (computerChoice === 'rock') {
            roundResult.textContent = 'Paper covers rock! You win!';
            humanScore++;
        }
    }

    else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            roundResult.textContent = 'Rock smashes scissors! You lose!';
            computerScore++;
        }

        else if (computerChoice === 'paper') {
            roundResult.textContent = 'Scissors cut paper! You win!';
            humanScore++;
        }
    }
    displayScore(computerScore, humanScore);
}

function displayScore(computerScore, humanScore) {
    const scores = document.querySelector("#scores");
    scores.textContent = `Computer: ${computerScore} Human: ${humanScore}`;
    if (computerScore === 5) {
        announceWinner('Computer');
    }
    if (humanScore === 5) {
        announceWinner('Human');
    }
}

function announceWinner(player) {
    const winner = document.querySelector('#winner');
    winner.textContent = `${player} wins!`;
    humanScore = 0;
    computerScore = 0;
}