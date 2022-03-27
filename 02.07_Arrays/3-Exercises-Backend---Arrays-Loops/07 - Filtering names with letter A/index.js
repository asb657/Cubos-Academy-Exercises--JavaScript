const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let filter1 = "a"
let filter2 = "A"

console.log(nomes[0][0]);

for(i = 0; i < nomes.length; i++) {
    if  (nomes[i][0] === filter1 || nomes[i][0] === filter2) {
    console.log(nomes[i]);
}
}