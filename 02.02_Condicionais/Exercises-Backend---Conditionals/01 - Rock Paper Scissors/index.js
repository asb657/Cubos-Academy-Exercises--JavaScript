const move1 = "rock"
const move2 = "paper"


if (move1 === "rock" && move2 === "scissors") {
    console.log("Player 1 wins the game.");
} else if (move1 === "rock" && move2 === "paper") {
    console.log("Player 2 wins the game.");
} else if (move1 === "paper" && move2 === "rock") {
    console.log("Player 1 wins the game.");
} else if (move1 === "paper" && move2 === "scissors") {
   console.log("Player 2 wins the game.");
} else if (move1 === "scissors" && move2 === "paper") {
    console.log("Player 1 wins the game.");
} else if (move1 === "scissors" && move2 === "rock") {
    console.log("Player 2 wins the game.");
} else if (move1 === move2) {
    console.log("Game tied.");
}

