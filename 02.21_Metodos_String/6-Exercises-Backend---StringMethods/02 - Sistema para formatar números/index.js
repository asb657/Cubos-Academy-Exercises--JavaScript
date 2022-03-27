const cpf = "12345678900";
const cnpj = "21898122000117";

console.log(cpf.slice(0,3));

function cpfValido(cpf) {
    if(cpf.length === 11){
        return cpf.slice(0,3) + "." + cpf.slice(3,6) + "." + cpf.slice(6,9) + "-" + cpf.slice(9,11);
    } else {
        return "CPF Inválido";
    }
}

function cnpjValido(cnpj) {
    if(cnpj.length === 14){
        return cnpj.slice(0,2) + "." + cnpj.slice(2,5) + "." + cnpj.slice(5,8) + "/" + cnpj.slice(8,12) + "-" + cnpj.slice(12,15);
    } else {
        return "CNPJ Inválido";
    }
}

console.log(cpfValido(cpf));
console.log(cnpjValido(cnpj));