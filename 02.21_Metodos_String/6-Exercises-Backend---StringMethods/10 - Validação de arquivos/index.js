const nomeArquivo = 'Foto da Familia.pdf';

function extensaoImagem (nomeArquivo) {

    let extensao = nomeArquivo.slice(nomeArquivo.length-3);

    if (extensao === "jpg" || extensao === "jpeg" || extensao === "gif" || extensao === "png") {
        return "Arquivo válido";
    } else {
        return "Arquivo inválido";
    }
};

console.log(extensaoImagem(nomeArquivo));
console.log(extensaoImagem('Foto da Familia.png'));