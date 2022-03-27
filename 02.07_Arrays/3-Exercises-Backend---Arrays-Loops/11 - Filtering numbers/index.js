const original = [5, 7, 13, 17, 26, 34, 118, 245];

const filter = original.filter((number) => number > 10 && number < 20 || number > 60);
console.log(filter);