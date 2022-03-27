const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const pares = (arrayNumeros) => {
    const resultado = arrayNumeros.filter((numero) => {
        return numero % 2 === 0;
    })

    if (resultado) {
        console.log(resultado);
    }; 
};

pares(numeros);