const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const tamanhoEspecifico = (caracteres, arrayCidades) => {
    const resultado = arrayCidades.filter((cidade) => {
        return cidade.length === caracteres;
    });

    if (resultado) {
        console.log(resultado);
    } 

};

tamanhoEspecifico(8, cidades);