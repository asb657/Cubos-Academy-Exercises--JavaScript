const nome = 'Guido Cerqueira';

// -   O nickname deve conter, no máximo, 13 caracteres;
// -   Deve começar sempre com "@";
// -   Não deve existir espaços em branco;
// -   São permitidos apenas caracteres minúsculos.

let nomeSemEspaco = nome.replace(/\s/g, '');
let nomeMinusculo = nomeSemEspaco.toLowerCase();

let nomeFinal = "@" + nomeMinusculo.slice(0,12);

console.log(nomeFinal);
