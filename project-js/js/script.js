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
const choices = ['Batu', 'Gunting', 'Kertas'];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.getAttribute('data-choice');
        const komputerChoice = choices[Math.floor(Math.random() * choices.length)];

        playerChoiceEl.textContent = `pilihan mu: ${playerChoice}`;
        komputerChoiceEl.textContent = `pilihan komputer: ${komputerChoice}`;

        if (playerChoice == komputerChoice) {
            gameResultEl.textContent = "Seri!";
            gameResultEl.style.color = "yellow";
        } else if(
            (playerChoice == 'Batu' && komputerChoice == 'Gunting') ||
            (playerChoice == 'Gunting' && komputerChoice == 'Kertas') ||
            (playerChoice == 'Kertas' && komputerChoice == 'Batu')         
        ) {
            gameResultEl.textContent = "Kamu Menang!";
            gameResultEl.style.color = "green";
            playerScore++;
            playerScoreEl.textContent = playerScore;
        } else {
            gameResultEl.textContent = "Kamu kalah!";
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

        playerChoiceEl.textContent = "Pilihan mu:";
        komputerChoiceEl.textContent = "pilihan komputer:";
        gameResultEl.textContent = "Ayo main!";
        gameResultEl.style.color = "Black";
    })
});
