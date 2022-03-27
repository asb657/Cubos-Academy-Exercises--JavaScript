const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 944.3]

const maiorNumero = numeros.reduce((acumulador, elementoAtual, indice, array) => {
    let maior = acumulador;

    if (elementoAtual > maior && elementoAtual % 2 == 0 ) {
        maior = elementoAtual
    }

    return  maior

})


console.log(maiorNumero);