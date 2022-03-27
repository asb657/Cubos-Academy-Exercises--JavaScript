// a) Ordenar o array abaixo em ordem crescente.

const numeros1 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

const ordemCrescente = (arrayNumeros) => {
    const itens = arrayNumeros.sort((a, b) => {
        return a - b;
    });
        console.log(itens);
};

ordemCrescente(numeros1);


// b) Ordenar o array abaixo em ordem decrescente.

const numeros2 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

const ordemDecrescente = (arrayNumeros) => {
    const itens = arrayNumeros.sort((b, a) => {
        return a - b;
    });
        console.log(itens);
};

ordemDecrescente(numeros2);


// c) Ordenar o array abaixo em ordem crescente, com base nos valores dos pontos de código Unicode.

const numeros3 = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]


const unicode = (arrayNumeros) => {
    const itens = arrayNumeros.sort();
        console.log(itens);
};

unicode(numeros3);

//d) Ordenar o array abaixo em ordem alfabética.

const frutas1 = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

const ordemCrescenteString = (arrayStrings) => {
    const itens = arrayStrings.sort((a, b) => {
        return a.localeCompare(b);
    });
        console.log(itens);
};

ordemCrescenteString(frutas1);


//e) Ordenar o array abaixo em ordem alfabética decrescente.

const frutas2 = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

const ordemDecrescenteString = (arrayStrings) => {
    const itens = arrayStrings.sort((b, a) => {
        return a.localeCompare(b);
    });
        console.log(itens);
};

ordemDecrescenteString(frutas2);


//f) Ordenar o array abaixo em ordem crescente, de acordo com a quantidade de caracters (do que tem menos caracteres, para o que tem mais).

const frutas3 = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

const stringUnicore = (arrayStrings) => {
    const itens = arrayStrings.sort()
        console.log(itens);
};

stringUnicore(frutas3);