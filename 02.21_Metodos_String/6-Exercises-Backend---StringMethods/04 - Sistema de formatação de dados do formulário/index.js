let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

/// -   O padrão do identificador são seis dígitos e caso o número não possua essa quantidade, complete com zero a esquerda;
/// -   O nome e sobrenome precisam sempre começar com letra maiúscula;
/// -   O e-mail não pode ter espaços em branco;


function identificadorAjustado(identificador) {
    return identificador.padStart(6, "0")
};

function nomeAjustado (nome) {

const arrayDeNomes = nome.split(" ");

let nomeFormatado = "";
    for (let item of arrayDeNomes) {
    //transformar a inicial de cada item em maiúscula
    let primeiraLetra = item.slice(0, 1);
    let restanteDoNome = item.slice(1);

    nomeFormatado += primeiraLetra.toUpperCase() + restanteDoNome + " ";
}

    return nomeFormatado.trim();
};


function emailAjustado(email) {

    return email.trim();
};

console.log(identificadorAjustado(identificador));
console.log(nomeAjustado(nome));
console.log(emailAjustado(email));