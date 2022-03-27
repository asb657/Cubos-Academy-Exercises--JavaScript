const move1 = 10;
const move2 = 5;

const result = ( (move1 + move2) % 2 > 0 ? "odd": "even");

console.log(`The sum of the moves is equal to ${result}.`);