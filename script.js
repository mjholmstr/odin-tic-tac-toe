// Set up gameBoard module
let gameBoardModule = (function() {
    let gameBoard = [];
    return {};
})();

let displayControllerModule = (function() {

})();

// Set up player factory function
let createPlayer = (playerName, playerNumber, assignedXO) => {
    let getPlayerName = () => {playerName;
    console.log("This is the name of player " + playerNumber + "....." + playerName); }
    return {getPlayerName, playerName, playerNumber, assignedXO};
};

// TODO: Create inputs for name and assigned XO - asking them for preference
// Is player number necessary?

let Justin = createPlayer("Justin", 1, "X");
let Matt = createPlayer("Matt", 2, "O");