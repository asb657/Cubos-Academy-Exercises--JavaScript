const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const listaAjustada = (arrayFrutas) => {
    const resultado = arrayFrutas.map((fruta) => {
        let lowercase = fruta.toLowerCase()
        return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
    });

    if (resultado){

        let index = -1
        let palavra = []
        let array = []

        for(i = 0; i < resultado.length; i++) {
        index++
        palavra = `${index} - ${resultado[i]}` 
        array.push(palavra);
        };

        console.log(array)
    };
};

listaAjustada(frutas);