const multiplicador = (array, callback) => {
    const lista = [];
    
    let indice = 0
    

    for (i = 0; i < array.length; i++){
        if(callback(array[i])){
            lista[indice] = array[i];
            indice++;
        }
    }

    return lista;
}

const resultado = buscador(professores, (item) => {
    return item.stack === 'Back'
});

console.log(resultado);