const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;


let quantidadeGrupos = Math.ceil(nomes.length/tamanhoDoGrupo);

let quantidadeGruposCheios = Math.floor(nomes.length/tamanhoDoGrupo);

let quantidadeGruposParciais = nomes.length%tamanhoDoGrupo > 0 ? 1 : 0;

console.log(quantidadeGrupos);
console.log(quantidadeGruposCheios);
console.log(quantidadeGruposParciais)
