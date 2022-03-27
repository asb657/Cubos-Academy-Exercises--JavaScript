const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];
const palavras2 = ["arroz", "feijão", "carne", "vodka", "macarrão"];
const palavras3 = ["arroz", "feijão", "carne", "macarrão"];

const bebidasValidas = (arrayPalavras) => {
    const itens = arrayPalavras.some((item) => {
       return item === "vodka" || item === "cerveja";
    });

    if(itens){
        console.log("revise sua lista, joão. possui bebida com venda proibida!");
    } else {
        console.log("tudo certo, vamos as compras!");
    };

};

bebidasValidas(palavras);
bebidasValidas(palavras2);
bebidasValidas(palavras3);