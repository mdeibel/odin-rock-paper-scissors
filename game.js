function computerPlay() {
    const randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return 'rock';
    }
    else if (randomChoice === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function playOneRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'rock') {
                return 'It\'s a tie! Rock ties Rock.';
            }
            else if (computerSelection === 'paper') {
                return 'You lose! Paper beats Rock';
            }
            else if (computerSelection === 'scissors') {
                return 'You win! Rock beats Scissors';
            }
        case 'paper':
            if (computerSelection === 'rock') {
                return 'You win! Paper beats Rock';
            }
            else if (computerSelection === 'paper') {
                return 'It\'s a tie! Paper ties Paper.';
            }
            else if (computerSelection === 'scissors') {
                return 'You lose! Scissors beats Paper';
            }
        case 'scissors':
            if (computerSelection === 'rock') {
                return 'You lose! Rock beats Scissors';
            }
            else if (computerSelection === 'paper') {
                return 'You win! Scissors beats Paper';
            }
            else if (computerSelection === 'scissors') {
                return 'It\'s a tie! Scissors ties Scissors.';
            }
        default:
            return 'Input error';
    }
}

function game(playerSelection) {
    const computerSelection = computerPlay();

    setImages(playerSelection, computerSelection);

    const result = playOneRound(playerSelection, computerSelection);
    if (result.startsWith('You win!')) {
        playerScore++;
    }
    else if (result.startsWith('You lose!')) {
        computerScore++;
    }

    const round = document.querySelector('.round');
    round.textContent = result;
    round.classList.remove('unstarted');

    document.querySelector('.buttons').classList.remove('unstarted');

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

function setImages(playerSelection, computerSelection) {
    const playerImage = document.querySelector('.player-image');
    playerImage.src = `imgs/${playerSelection}.png`;

    const computerImage = document.querySelector('.computer-image');
    computerImage.src = `imgs/${computerSelection}.png`;
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => { game(button.textContent.toLowerCase()) });
});

let playerScore = 0;
let computerScore = 0;
const score = document.querySelector('.score');
score.textContent = `You have ${playerScore}, computer has ${computerScore}`;