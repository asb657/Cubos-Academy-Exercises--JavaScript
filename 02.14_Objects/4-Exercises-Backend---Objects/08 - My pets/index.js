const users = [
    {
        name: "João",
        pets: [],
    },
    {
        name: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        name: "Beatriz",
        pets: ["Lessie"],
    },
    {
        name: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        name: "Antonio",
        pets: ["Naninha"],
    },
]


///A. If the person doesn't have pets, the message should be: `I'm John and I don't have pets`.
///B. If the person has only one pet, the message should be: `I am João and I have 1 pet`.
///C. If the person has more than one pet, the message should be: `I am João and I have 3 pets`.


b = users[4].pets.length
console.log(b);

for (let i=0; i < users.length; i++) {
    if (users[i].pets.length > 1) {
        users[i].sentence = `I'm ${users[i].name} and I have ${users[i].pets.lenght} pets.`
    } else if (users[i].pets.length === 1) {
        users[i].sentence = `I'm ${users[i].name} and I have ${users[i].pets.lenght} pet.`
    } else (users[i].sentence = `I'm ${users[i].name} and I don't have pets.`);
}

console.log(users); //// ver com monitor passar o termo dentro do objeto.


function method2(dados) {
for (let i = 0; i < users.length; i++) {
    let terPet = users[i].pets
      ? `and I have ${users[i].pets.length} pets`
      : 'I don`t have pets'
  
    console.log(`I'm ${users[i].name} ${terPet}`)
}
}

method2(users);