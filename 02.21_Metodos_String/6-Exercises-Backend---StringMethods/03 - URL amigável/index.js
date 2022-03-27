const texto = "Aprenda programar do zero na Cubos Academy";


function replaceAll(original, text, newText) {
    while (original !== original.replace(text, newText)) {
        original = original.replace(text, newText);
    }
    return original;
}

let textoUrl = replaceAll(texto, " ", "-")
let textoUrlFinal = textoUrl.toLowerCase();

console.log(textoUrlFinal);