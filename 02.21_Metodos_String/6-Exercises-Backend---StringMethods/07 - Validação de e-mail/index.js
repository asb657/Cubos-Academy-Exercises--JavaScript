const email = "aluno@cubos.academy";



function emailFormatado (email) {

const indexArroba = email.indexOf("@"); //4

const indexPontoAposArroba = email.indexOf(".", indexArroba);

if (indexPontoAposArroba > indexArroba && email[0] !== "." && email[email.length-1] !== "."  && indexArroba >-1) {
    return "Email válido";
} else {
    return "Email inválido";
}
};


console.log(emailFormatado(`jose@cubos.academy`));           // E-mail válido
console.log(emailFormatado(`jose@cubos.academy.br`));        // E-mail válido   
console.log(emailFormatado(`jose.messias@cubos.academy`));   // E-mail válido   
console.log(emailFormatado(`jose.messias@cubos.io`));        // E-mail válido   
console.log(emailFormatado(`jose@cubos`));                   // E-mail inválido 
console.log(emailFormatado(`jose.messias@cubos`));           // E-mail inválido   
console.log(emailFormatado(`jose.messias@.`));               // E-mail inválido 
console.log(emailFormatado(`jose.@cubos`));                  // E-mail inválido   
console.log(emailFormatado(`.@`));                           // E-mail inválido 
console.log(emailFormatado(`@.`));                           // E-mail inválido 
console.log(emailFormatado(`jose.messias@cubos.`));          // E-mail inválido 
console.log(emailFormatado(`.messias@cubos.`));              // E-mail inválido 
console.log(emailFormatado(`.messias@cubos`));               // E-mail inválido 
console.log(emailFormatado(email));