/* method 1 - Array.prototype.reduce
Array.prototype.reduce can be used to iterate through the array, 
adding the current element value to the sum of the previous element values. */

const numbers = [2, 3, 4, 6];

console.log(
    numbers.reduce((a, b) => a + b, 0)
  );


/* method 2 - Adding numbers with "For Traditional" */

const numbers2 = [2, 3, 4, 6];

const sum = 0;

for ( i = 0; i < numbers2.length; i++){
    sum = sum + numbers2[i];
}

console.log(`Sum value of the array elements are : ${sum}`)