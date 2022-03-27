const palavras = ["livro", "caneta", "sol", "carro", "orelha"];
const palavras2 = ["livro", "panda", "calha", "carro", "junta"];

const verificador = (arrayPalavras) => {
    const resultado = arrayPalavras.every((palavra) => {
        return palavra.length === 5;
    });

    if(resultado) {
        console.log("array validado");
    } else{
        console.log("existe palavra inválida");
    }
};

verificador(palavras);
verificador(palavras2);