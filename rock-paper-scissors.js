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
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }

    else if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            console.log('Paper covers rock! You lose!');
            computerScore++;
        }

        else if (computerChoice === 'scissors') {
            console.log('Rock smashes scissors! You win!');
            humanScore++;
        }
    }

    else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            console.log('Scissors cut paper! You lose!');
            computerScore++;
        }

        else if (computerChoice === 'rock') {
            console.log('Paper covers rock! You win!');
            humanScore++;
        }
    }

    else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log('Rock smashes scissors! You lose!');
            computerScore++;
        }

        else if (computerChoice === 'paper') {
            console.log('Scissors cut paper! You win!');
            humanScore++;
        }
    }
}