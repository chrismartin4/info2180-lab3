"use strict"

window.onload = function () {

    var currentPlayer = "X";
    var turn = true;
    const combinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    let currentGame = ["", "", "", "", "", "", "", "", ""];
    let board = document.querySelectorAll("#board div");
    var statusDisplay = document.querySelector("#status");

    for (let i = 0; i < board.length; i++) {
        board[i].classList.add("square");
        board[i].addEventListener('click', function () {
            console.log("Square " + i + " clicked");
            board[i].textContent = currentPlayer;
            currentGame[i] = currentPlayer;
            console.log(currentGame);

            for (let p = 0; p < combinations.length; p++) {
                if (currentGame[combinations[p][0]] == currentPlayer && currentGame[combinations[p][1]] == currentPlayer && currentGame[combinations[p][2]] == currentPlayer) {
                    statusDisplay.classList.add("you-won");
                    if (turn == true) {
                        statusDisplay.textContent = "Congratulations! X is the winner";
                        for (let n = 0; n < board.length; n++) {
                            board[n].style.pointerEvents = 'none';
                        }
                    }
                    else if (turn == false) {
                        statusDisplay.textContent = "Congratulations! O is the winner";
                        for (let n = 0; n < board.length; n++) {
                            board[n].style.pointerEvents = 'none';
                        }
                    }
                    else {
                        statusDisplay.textContent = "Draw";
                    }
                }
            }

            if (turn == true) {
                this.classList.add("X");
                this.textContent = "X";
                this.style.pointerEvents = 'none';
            }
            else {
                this.classList.add("O");
                this.textContent = "O";
                this.style.pointerEvents = 'none';
            }

            turn = !turn;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });

        board[i].addEventListener('mouseover', function () {
            this.classList.add("hover");
        });

        board[i].addEventListener('mouseout', function () {
            this.classList.remove("hover");
        });

        let newgame = document.querySelector(".btn");
        newgame.addEventListener("click", function () {
            for (let n = 0; n < board.length; n++) {
                board[n].textContent = "";
                board[n].classList.remove("X");
                board[n].classList.remove("O");
                board[n].style.pointerEvents = 'auto';
            }
            currentPlayer = "X";
            turn = true;
            currentGame = ["", "", "", "", "", "", "", "", ""];
            statusDisplay.classList.remove("you-won");
            statusDisplay.textContent = "Move your mouse over a square and click to place X or O";
        })
    }
}