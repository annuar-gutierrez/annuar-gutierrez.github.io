const statusDisplay = document.getElementById('game-status');
const restartButton = document.getElementById('restart-button');
const squares = document.querySelectorAll('.square');

let gameActive = true;
let currentPlayer = "X"; // X starts
let gameState = ["", "", "", "", "", "", "", "", ""]; // Tracks the board state

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Message functions
const winningMessage = () => `Player ${currentPlayer} has won!`;
const tieMessage = () => `Game ended in a tie!`;
const currentPlayerTurn = () => `It's Player ${currentPlayer}'s turn`;

// Handle a square click
function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    // Update the game state and UI
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    handleResultValidation();
}

// Check for win/tie
function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    // Check for tie
    let roundTie = !gameState.includes("");
    if (roundTie) {
        statusDisplay.innerHTML = tieMessage();
        gameActive = false;
        return;
    }

    // Switch players
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

// Restart the game
// function handleRestartGame() {
//     gameActive = true;
//     currentPlayer = "X";
//     gameState = ["", "", "", "", "", "", "", "", ""];
//     statusDisplay.innerHTML = currentPlayerTurn();
//     squares.forEach(square => square.textContent = "");
// }

squares.forEach(square => square.addEventListener('click', handleCellClick));
// restartButton.addEventListener('click', handleRestartGame);
statusDisplay.innerHTML = currentPlayerTurn();