const taboada = (indice) => {
    
    let index = indice;
    let numero = 1;
    let resultado = index;

    const multiplicador = () => {
        console.log(`${index} X ${numero} = ${resultado}`);
        numero++
        resultado = numero * index;

        if(resultado > index*10){
            clearInterval(id);
        }
    }

    const id = setInterval(multiplicador)
    
}

taboada(11)
