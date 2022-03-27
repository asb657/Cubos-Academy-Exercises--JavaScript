const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;


function carros (nomes, posicao) {

    let grupo = nomes.slice(posicao, posicao + 3);
    let grupoString = grupo.join(" - ");
    return grupoString;
}

console.log(carros(nomes,posicao));