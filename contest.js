let matchCount = [1, 2, 1, 2, 2, 1, 2, 2, 1]

function whoWon(matchCount) {
    let playerOne = 0;
    let playerTwo = 0;
    for (let i = 0; i < matchCount.length; i++) {
        if (matchCount[i] == 1) {
            playerOne++;
            console.log("Playing One's score is now " + playerOne);
        } else {
            playerTwo++;
            console.log("Playing Two's score is now " + playerOne);
        }
        if (playerOne > playerTwo) {
            console.log("Player One won the most matches with " + playerOne + " matches");
        } else if (playerOne < playerTwo) {
            console.log("Player Two won the most matches with " + playerTwo + " matches");
        } else if (playerOne == playerTwo) {
            console.log("The players tied!")
        }
    }
}

whoWon(matchCount);