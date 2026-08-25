// inisialisasi
const buttons = document.querySelectorAll('.choice-btn');
const playerScoreEl = document.getElementById('player-score');
const komputerScoreEl = document.getElementById('komputer-score');
const playerChoiceEl = document.getElementById('player-choice');
const komputerChoiceEl = document.getElementById('komputer-choice');
const gameResultEl = document.getElementById('game-result');
const resetBtn = document.getElementById('reset-btn');

let playerScore = 0;
let komputerScore = 0;
const choices = ['Rock', 'Scissors', 'Paper'];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.getAttribute('data-choice');
        const komputerChoice = choices[Math.floor(Math.random() * choices.length)];

        playerChoiceEl.textContent = `Your Choice: ${playerChoice}`;
        komputerChoiceEl.textContent = `Computer Choice: ${komputerChoice}`;

        if (playerChoice == komputerChoice) {
            gameResultEl.textContent = "Draw!";
            gameResultEl.style.color = "yellow";
        } else if(
            (playerChoice == 'Rock' && komputerChoice == 'Scissors') ||
            (playerChoice == 'Scissors' && komputerChoice == 'Paper') ||
            (playerChoice == 'Paper' && komputerChoice == 'Rock')         
        ) {
            gameResultEl.textContent = "You Win!";
            gameResultEl.style.color = "green";
            playerScore++;
            playerScoreEl.textContent = playerScore;
        } else {
            gameResultEl.textContent = "You Lose!";
            gameResultEl.style.color = "red";
            komputerScore++;
            komputerScoreEl.textContent = komputerScore;
        }
    });

    resetBtn.addEventListener('click', () => {
        playerScore = 0;
        komputerScore= 0;

        playerScoreEl.textContent = playerScore;
        komputerScoreEl.textContent = komputerScore;

        playerChoiceEl.textContent = "Your Choice:";
        komputerChoiceEl.textContent = "Computer Choice:";
        gameResultEl.textContent = "Let's Play!";
        gameResultEl.style.color = "Black";
    })
});
