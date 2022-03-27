const sideA = 5;
const sideB = 2;

if (sideA === sideB && sideA === 0) {
    console.log("Douplet - Branco");
} else if (sideA === sideB && sideA === 1) {
    console.log("Douplet - Ás");
} else if (sideA === sideB && sideA === 2) {
    console.log("Douplet - Duque");
} else if (sideA === sideB && sideA === 3) {
    console.log("Douplet - Terno");
} else if (sideA === sideB && sideA === 4) {
    console.log("Douplet - Quadra");
} else if (sideA === sideB && sideA === 5) {
    console.log("Douplet - Quina");
} else if (sideA === sideB && sideA === 6) {
    console.log("Douplet - Sena");
} else { 
console.log("It isn`t a douplet");
}

