const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

let frutasReverso = frutas.reverse();
let frutasString = frutasReverso.join(", ");
console.log(frutasString);

frutas.reverse().shift();

frutas.splice(frutas.length - 1, 1, "Melão");

console.log(frutas);


