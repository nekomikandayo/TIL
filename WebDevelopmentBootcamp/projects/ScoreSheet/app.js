const stats = {
    p1: 0,
    p2: 0,
    gamePoint: 1,
    finished: false
}

const p1Button = document.querySelector('#player1-button');
const p2Button = document.querySelector('#player2-button');
const p1Score = document.querySelector('#player1-score');
const p2Score = document.querySelector('#player2-score');
const resetButton = document.querySelector('#reset-button');
const selectGamePoint = document.querySelector('#select-game-point');
const updateScoreBoard = () => {
    p1Score.innerText = stats.p1;
    p2Score.innerText = stats.p2;
}


const checkWin = () => {
    if(!isGameOver()) return;

    if (stats.p1 >= stats.gamePoint) {
        applyEndGameStyles(p1Score, p2Score);
    } else {
        applyEndGameStyles(p2Score, p1Score);
    }
}

const isGameOver = () => {
    return stats.p1 >= stats.gamePoint || stats.p2 >= stats.gamePoint;
}

const applyEndGameStyles = (winner, loser) => {
    winner.classList.add('winner');
    loser.classList.add('loser');
    stats.finished = true;
};


const resetGame = () => {
    stats.p1 = 0;
    stats.p2 = 0;
    stats.finished = false;
    document.querySelector('#player1-score').classList.remove('winner');
    document.querySelector('#player2-score').classList.remove('winner');
    document.querySelector('#player1-score').classList.remove('loser');
    document.querySelector('#player2-score').classList.remove('loser');
    updateScoreBoard();
}

const handleScoreUpdate = (playerKey) => {
    if (!stats.finished) {
        stats[playerKey]++;
        updateScoreBoard();
        checkWin();
    }
};

p1Button.addEventListener('click', () => handleScoreUpdate('p1'));
p2Button.addEventListener('click', () => handleScoreUpdate('p2'));

resetButton.addEventListener('click', () => {
    resetGame();
});

selectGamePoint.addEventListener('change', (e) => {
    stats.gamePoint = parseInt(e.target.value, 10);
    resetGame();
});


