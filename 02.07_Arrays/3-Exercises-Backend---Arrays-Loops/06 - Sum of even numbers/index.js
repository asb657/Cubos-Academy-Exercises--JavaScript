const numbersArray = [3, 4, 7, 8, 1, 6, 5, 10];

let sum = 0

for (let i = 0; i < numbersArray.length; i++) {
	if (numbersArray[i] % 2 === 0) {
        sum = sum + numbersArray[i];
	}
}

console.log(sum);