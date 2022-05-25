function computerPlay() {
    const randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return 'Rock';
    }
    else if (randomChoice === 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function playOneRound(playerSelection, computerSelection) {
    const lowerComputerSelection = computerSelection.toLowerCase();
    switch (playerSelection.toLowerCase()) {
        case 'rock':
            if (lowerComputerSelection === 'rock') {
                return 'It\'s a tie! Rock ties Rock.';
            }
            else if (lowerComputerSelection === 'paper') {
                return 'You lose! Paper beats Rock';
            }
            else if (lowerComputerSelection === 'scissors') {
                return 'You win! Rock beats Scissors';
            }
        case 'paper':
            if (lowerComputerSelection === 'rock') {
                return 'You win! Paper beats Rock';
            }
            else if (lowerComputerSelection === 'paper') {
                return 'It\'s a tie! Paper ties Paper.';
            }
            else if (lowerComputerSelection === 'scissors') {
                return 'You lose! Scissors beats Paper';
            }
        case 'scissors':
            if (lowerComputerSelection === 'rock') {
                return 'You lose! Rock beats Scissors';
            }
            else if (lowerComputerSelection === 'paper') {
                return 'You win! Scissors beats Paper';
            }
            else if (lowerComputerSelection === 'scissors') {
                return 'It\'s a tie! Scissors ties Scissors.';
            }
        default:
            return 'Input error';
    }
}

function game(playerSelection) {
    const result = playOneRound(playerSelection, computerPlay());
    if (result.startsWith('You win!')) {
        playerScore++;
    }
    else if (result.startsWith('You lose!')) {
        computerScore++;
    }
    const round = document.querySelector('.round');
    round.textContent = result;
    score.textContent = `You have ${playerScore}, computer has ${computerScore}.`;
    if (playerScore >= 5) {
        score.textContent += ' You won the match! Refresh to play again.'
        disableButtons();
    }
    else if (computerScore >= 5) {
        score.textContent += ' Computer has won the match! Refresh to play again.'
        disableButtons();
    }
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => { game(button.textContent) });
});

let playerScore = 0;
let computerScore = 0;
const score = document.querySelector('.score');
score.textContent = `You have ${playerScore}, computer has ${computerScore}`;