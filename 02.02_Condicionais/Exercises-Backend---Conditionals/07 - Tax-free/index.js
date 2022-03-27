const retired = false;
const serious_illness = true;
const income = 1_000_000; //cents


income_in_BRL = income/100
console.log(income_in_BRL)

if (retired || serious_illness) {
    console.log("EXEMPTED PERSON");
 } else if (income/100 < 28_559.70) {
     console.log("NARROWLY ESCAPED");
 } else {
     console.log(`SO SORRY`)
 }