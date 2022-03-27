const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];


const filtroAZ = (letra, arrayNomes) => {
    const resultado = arrayNomes.filter((nome) => {
        return nome[0] === letra.toLowerCase() || nome[0] === letra.toUpperCase()
    });

        if (resultado) {
            console.log(resultado)
        };
};

filtroAZ("A", nomes);