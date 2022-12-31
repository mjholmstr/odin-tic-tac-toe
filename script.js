// Set up player factory function
let createPlayer = () => {

    // Loop to capture players first name and auto-assign number 
    for (let i = 0 ; i < 4 ; i++) {
        if (gameBoardModule.playerArray.length >= 6) {
            gameBoardModule.makePlayerMove();
            break
        } else if (gameBoardModule.playerArray.length == 0 ) {
            let playerName = prompt("what is your player name?");

            if (playerName == "" || playerName == null) {
                alert("Sorry, name cannot be blank!");
                continue;
            }

            let playerNumber = 1;
            let assignedXO = "X";
            alert("You are player 1, and your assigned letter is X");
            gameBoardModule.playerArray.push(playerName, playerNumber, assignedXO);
            
        } else if (gameBoardModule.playerArray.length !== 0) {
            let playerName = prompt("What is your name?");

            if (playerName == "" || playerName == null) {
                alert("Sorry, name cannot be blank");
                continue;
            }

            let playerNumber = 2;
            let assignedXO = "O";
            alert("You are player 2 and are assigned O!");
            gameBoardModule.playerArray.push(playerName, playerNumber, assignedXO);
        }
    }
}


// Set up gameBoard module
let gameBoardModule = (function() {
    let gameBoard = [];
    let playerArray = [];

    // Public function to invoke next player move
    let makePlayerMove = () => {

        // Check for two player and gameboard array doesn't spill over
        if (playerArray.length == 6 && gameBoard.length < 9) {

            if (gameBoard.length == 0) {
                alert("Player 1 , please make your move.");
                gameBoard.push(playerArray[2]);

            } else if (gameBoard[gameBoard.length - 1] == "X") {
                alert("Player 2, please make your move.");
                gameBoard.push(playerArray[5]);

            } else if (gameBoard[gameBoard.length - 1] == "O") {
                alert("Player 1, please make your move.");
                gameBoard.push(playerArray[2]);
            }
        };
    }
    return { gameBoard, playerArray, makePlayerMove};
})();

let displayControllerModule = (function() {
    const makeMove = document.querySelectorAll(".game-board-button");

    // Index and loop through each button node
    let index = 0;
    makeMove.forEach(makeMoves => {
        makeMoves.dataset.linkedButton = index;
        makeMoves.addEventListener("click", renderArrayToScreen);

        function renderArrayToScreen() {
            const gridBoxes = document.querySelectorAll(".grid-box");

            // Index and loop through each grid box node
            let index = 0;
            gridBoxes.forEach(gridBox => {
                gridBox.dataset.linkedButton = index;

                if (gridBox.getAttribute("data-linked-button") == makeMoves.getAttribute("data-linked-button")) {
                    gridBox.textContent = gameBoardModule.gameBoard[gameBoardModule.gameBoard.length - 1];
                }
            index++;
            })
        gameBoardModule.makePlayerMove();
        }
    index++    
    })

})();

// Listen for click to start game
const startGameButton = document.querySelector(".start-game-button");
startGameButton.addEventListener("click", createPlayer);



// TODO: Create inputs for name and assigned XO - asking them for preference
// Is player number necessary

