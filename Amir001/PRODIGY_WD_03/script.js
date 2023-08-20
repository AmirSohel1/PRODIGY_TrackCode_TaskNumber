// Constants to represent players
const PLAYER_X = 'X';
const PLAYER_O = 'O';

// Initial player (X starts)
let currentPlayer = PLAYER_X;

// The game board
const board = ['', '', '', '', '', '', '', '', ''];

// Winning combinations
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
];

// Function to make a move
function makeMove(cellIndex) {
    if (board[cellIndex] === '' && !checkWinner()) {
        board[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].textContent = currentPlayer;
        currentPlayer = (currentPlayer === PLAYER_X) ? PLAYER_O : PLAYER_X;
        checkWinner();
    }
}

// Function to check for a winner
function checkWinner() {
    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById('message').textContent = `${currentPlayer} wins!`;
            return true;
        }
    }

    if (!board.includes('')) {
        document.getElementById('message').textContent = "It's a draw!";
        return true;
    }

    return false;
}

// Function to reset the game
function resetGame() {
    board.fill('');
    currentPlayer = PLAYER_X;
    document.getElementById('message').textContent = '';
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.textContent = '';
    }
}

// Reset the game when the page loads
resetGame();
