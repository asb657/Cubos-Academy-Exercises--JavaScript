/* method 1 - Loop */
const letters2 = ["A", "a", "B", "C", "E", "e"];

let countLetters = 0;
let find1 = "z";
let find2 = "e"

for (let i = 0; i < letters2.length; i++) {
	if (letters2[i] === find1 || letters2[i] === find2) {
		countLetters++;
	}
}

if (countLetters > 0) {
	console.log(`There are ${countLetters} letter "${find1}" or "${find2}" in the array`);
} else {
	console.log(`No one letter "${find1}" or "${find2}" has been found`);
}

