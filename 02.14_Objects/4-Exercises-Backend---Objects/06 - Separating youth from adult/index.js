let users = [
    {
        name: "John",
        age: 25,
    },
    {
        name: "Anna",
        age: 18,
    },
    {
        name: "Beatrix",
        age: 15,
    },
    {
        name: "Carlos",
        age: 16,
    },
    {
        name: "Antonio",
        age: 32,
    },
]


let youthful = [];
let adults = [];


for (let faixa of users) {
    if (users.age < 18) {
        youthful = {...users};
    } else { adults = {...users};
}
}

console.log(adults);



