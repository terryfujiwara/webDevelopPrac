let player1Score = 0;
let player2Score = 0;
const win_point = document.querySelector('#point_select').value; //str
const win_point_int = parseInt(win_point);
const btnPlayer1 = document.querySelector('#player1AddPoint');
const btnPlayer2 = document.querySelector('#player2AddPoint');
const btnReset = document.querySelector('#resetScore');
const player1curr = document.querySelector('#player1');
const player2curr = document.querySelector('#player2');

btnPlayer1.addEventListener('click', function (e) {
    win_point_int = parseInt(document.querySelector('#point_select').value);
    player1Score++;
    player1curr.innerText = player1Score.toString();
    update(judgeWinner(player1Score, player2Score, win_point_int));
})

btnPlayer2.addEventListener('click', function (e) {
    win_point_int = parseInt(document.querySelector('#point_select').value);
    player2Score++;
    player2curr.innerText = player2Score.toString();
    update(judgeWinner(player1Score, player2Score, win_point_int));
})

btnReset.addEventListener('click', function (e) {
    player1Score = 0;
    player2Score = 0;
    player1curr.innerText = player1Score.toString();
    player2curr.innerText = player2Score.toString();
    btnPlayer1.disabled = false;
    btnPlayer2.disabled = false;
})

function judgeWinner(player1Score, player2Score, win_point_int) {
    if (player1Score >= win_point_int && player1Score - player2Score >= 2) {
        return 1;//player1 wins
    }
    else if (player2Score >= win_point_int && player2Score - player1Score >= 2) {
        return 2;//player2 wins
    }
    else {
        return 3;//neither player wins
    }
}

function update(num) {
    if (num === 1) {
        console.log("Player1 Wins!");
        btnPlayer1.disabled = true;
    }
    else if (num === 2) {
        console.log("Player2 Wins!");
        btnPlayer2.disabled = true;
    }
    else {
        console.log("Game continues")
    }
}

