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


for ( var i=0; i<users.length; i++ ) {
    if( users[i].age >= 18) {
       users[i].of_age = true
    } else {
        users[i].of_age = false;
    }
}

console.log(users);
