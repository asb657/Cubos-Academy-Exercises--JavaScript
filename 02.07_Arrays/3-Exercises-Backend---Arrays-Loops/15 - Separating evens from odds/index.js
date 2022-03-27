const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = [];
const odd = [];

for (let n of original)
    if (n % 2 == 0)
        even.push(n);
    else odd.push(n);
console.log(even);
console.log(odd);