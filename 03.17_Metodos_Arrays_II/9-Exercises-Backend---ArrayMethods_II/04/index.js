const numeros = [0, 122, 4, 7, 2, 8, 44];

const pares = (arrayNumeros) => {
    const resultado = arrayNumeros.every((numero) => {
    return numero % 2 === 0;
    });

    if (resultado) {
        console.log("array valido");
    } else {
        console.log("array invalido");
    };
};

pares(numeros);