const characters = "e";

var lowerVowel = ["a", "e", "i", "o", "u"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var upperVowel = ["A", "E", "I", "O", "U"];


var contlowerVowel = (lowerVowel.indexOf(characters) > -1);
var contupperVowel = (upperVowel.indexOf(characters) > -1);
var contnumber = (number.indexOf(characters) > -1);

if (contupperVowel) {
    console.log(`"${characters}" is an uppercase vowel.`);
} else if (contlowerVowel) {
    console.log(`"${characters}" is a lowercase vowel.`);
} else if (contnumber) {
    console.log(`"${characters}" is a number.`);
} else {
    console.log(`"${characters}" is a character.`);
}

