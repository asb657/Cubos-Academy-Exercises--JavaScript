const cpf = "011.022.033-44";


function replaceCpf (cpf) {

function replaceAll(original, text, newText) {
    while (original !== original.replace(text, newText)) {
        original = original.replace(text, newText);
    }
    return original;
}

    let semPonto = replaceAll(cpf, ".", "");
    let semHifen = replaceAll(semPonto, "-", "");

    return semHifen;

};

console.log(replaceCpf(cpf));