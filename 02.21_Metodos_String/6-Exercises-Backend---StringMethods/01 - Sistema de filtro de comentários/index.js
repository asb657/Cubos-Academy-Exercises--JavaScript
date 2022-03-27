let comentario = "Esse COVID é muito perigoso!";

function localizarPalavras(comentario){

function replaceAll(original, text, newText) {
    while (original !== original.replace(text, newText)) {
        original = original.replace(text, newText);
    }
    return original;
}

comentario = replaceAll(comentario, "c", "C");
comentario = replaceAll(comentario, "o", "O");
comentario = replaceAll(comentario, "v", "V");
comentario = replaceAll(comentario, "p", "P");
comentario = replaceAll(comentario, "a", "A");
comentario = replaceAll(comentario, "n", "N");
comentario = replaceAll(comentario, "d", "D");
comentario = replaceAll(comentario, "e", "E");
comentario = replaceAll(comentario, "m", "M");
comentario = replaceAll(comentario, "i", "I");

    if (comentario.includes("COVID")){
        return `Comentário bloqueado por conter palavras proibidas`;
    } else if (comentario.includes("PANDEMIA")){
        return `Comentário bloqueado por conter palavras proibidas`;
    } else return `Comentário autorizado`;
};

console.log(localizarPalavras(comentario));

