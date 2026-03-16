const stats = {
    p1: 0,
    p2: 0,
    gamePoint: 1,
    finished: false
}

const p1Button = document.querySelector('#player1-button');
const p2Button = document.querySelector('#player2-button');
const resetButton = document.querySelector('#reset-button');
const selectGamePoint = document.querySelector('#select-game-point');
const updateScoreBoard = () => {
    document.querySelector('#player1-score').innerText = stats.p1;
    document.querySelector('#player2-score').innerText = stats.p2;
}


const checkWin = () => {
    if(stats.p1 >= stats.gamePoint){
        document.querySelector('#player1-score').classList.add('winner');
        document.querySelector('#player2-score').classList.add('loser');
        stats.finished = true;
    }else if(stats.p2 >= stats.gamePoint){
        document.querySelector('#player2-score').classList.add('winner');
        document.querySelector('#player1-score').classList.add('loser');
        stats.finished = true;
    }
}

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

p1Button.addEventListener('click', () => {
    if (!stats.finished) {
        stats.p1++;
        updateScoreBoard();
        checkWin();
    }
});

p2Button.addEventListener('click', () => {
    if (!stats.finished) {
        stats.p2++;
        updateScoreBoard();
        checkWin();
    }
});

resetButton.addEventListener('click', () => {
    resetGame();
});

selectGamePoint.addEventListener('change', (e) => {
    stats.gamePoint = parseInt(e.target.value, 10);
    resetGame();
});


