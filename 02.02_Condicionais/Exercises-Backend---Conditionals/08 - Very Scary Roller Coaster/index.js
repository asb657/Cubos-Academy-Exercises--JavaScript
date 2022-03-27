const age = 19;
const hasPathology = false;
const height = 180;
const is_student = true;


if (age < 12 || age > 65 || hasPathology || height < 150) {
    console.log("ACCESS DENIED");
 } else if (age < 18 || is_student) {
     console.log("10 BRL");
 } else {
     console.log(`20 BRL`)
 }