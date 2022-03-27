const celular = 7199918888;

function celularAjustado (celular) {

let celular_string = String(celular);

    if(celular_string.length === 11){
        return "(" + celular_string.slice(0,2) + ")" + " " + celular_string.slice(2,3) + " " + celular_string.slice(3,7) + "-" + celular_string.slice(7);
    } else if(celular_string.length === 10) {
        return "(" + celular_string.slice(0,2) + ")" + " 9 " + + celular_string.slice(2,6) + "-" + celular_string.slice(6);
    } else if(celular_string.length === 9) {
        return "9 " + celular_string.slice(1,5) + "-" + celular_string.slice(5);
    } else if(celular_string.length === 8) {
        return "9 " + celular_string.slice(0,4) + "-" + celular_string.slice(4);
    }
};

console.log(celularAjustado(celular));