function computerPlay() {
    const randomChoice = Math.floor(Math.random()*3);
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
    switch(playerSelection.toLowerCase()) {
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i ++) {
        const playerSelection = prompt('Pick rock, paper, or scissors:');
        const result = playOneRound(playerSelection, computerPlay());
        if (result.startsWith('You win!')) {
            playerScore++;
        }
        else if (result.startsWith('You lose!')) {
            computerScore++;
        }
        console.log(result);
    }
    console.log(`Final score: You have ${playerScore}, computer has ${computerScore}`);
}

game();