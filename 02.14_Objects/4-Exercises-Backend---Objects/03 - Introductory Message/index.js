const user = {
    name: "John",
    age: 25,
    profession: "programmer",
    favorite_color: "green"};

console.log(`Hello... I'm ${user.name} and I'm ${user.age} years old. I'm a ${user.profession} and my favorite color is ${user.favorite_color}!`);

/// Code with destructuring assignment

const {name, age, profession, favorite_color} = user;
console.log(`Hello I'm ${name} and I'm ${age}. I'm a ${profession} and my favorite color is ${favorite_color}`);

