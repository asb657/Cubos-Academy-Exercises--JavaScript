const insideQueue = ["Jose", "Maria", "Joao"];
const outsideQueue = ["Joana", "Roberta", "Marcos", "Felipe"];

if (outsideQueue.length > 0)
    for (let inside of insideQueue)
        if (insideQueue.length < 5)
        insideQueue.push(outsideQueue.shift());
console.log(insideQueue);
console.log(outsideQueue);
console.log(insideQueue.length);