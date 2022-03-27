![](https://i.imgur.com/xG74tOh.png)

# Exercise 08

## My pets

1. Below, we have a list of people, where each person has a list with one, several or no pets. Scroll through each person on the list and print a message according to the following conditions.

A. If the person doesn't have pets, the message should be: `I'm John and I don't have pets`.

B. If the person has only one pet, the message should be: `I am João and I have 1 pet`.

C. If the person has more than one pet, the message should be: `I am João and I have 3 pets`.

```javascript
const users = [
    {
        name: "John",
        pets: [],
    },
    {
        name: "Anna",
        pets: ["Pingo", "Lulu"],
    },
    {
        name: "Beatrix",
        pets: ["Lessie"],
    },
    {
        name: "Carlos",
        pets: ["Farofa", "Sausage", "Potato"],
    },
    {
        name: "Antonio",
        pets: ["Naninha"],
    },
]
```

Obs.: The name of the person and the amount of pets must be dynamic, according to the information of each object.

_Tip: destructuring can make code writing easier, as well as making it more readable._

Test with other examples.

Commit the result.

---
