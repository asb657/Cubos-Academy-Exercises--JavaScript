const participants = [
    { name: "John" },
    { name: "Anna" },
    { name: "Beatrix" },
    { name: "Mary" },
    { name: "Anna Clara" },
    { name: "Joan" },
    { name: "August" },
    { name: "Renan" },
    { name: "Patricia" },
    { name: "Carlos" },
    { name: "Renate" },
    { name: "Joseph" },
    { name: "Robert" },
    { name: "Sarah" },
    { name: "Junior" },
    { name: "Peter" },
    { name: "Victor" },
    { name: "Antonio" },
]
  
  for (let i = 0; i < participants.length; i++) {
    if (participants[i].nome == 'Carlos') {
      console.log(`Folks... Carlos is in the ${i}th position, go lá!`)
    }
  }