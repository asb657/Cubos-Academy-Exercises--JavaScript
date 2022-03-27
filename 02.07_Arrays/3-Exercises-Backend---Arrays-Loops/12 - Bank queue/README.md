![](https://i.imgur.com/xG74tOh.png)

# Exercise 12

## Bank queue

In this exercise we will control the queue of a bank that has a limit of people who can stay inside.
So **as long as** there are people outside and inside it has not yet reached the allowed limit, we must allow entry.

For this, we will have two arrays (one to control the queue inside the bank and the other to control the queue outside) of strings where each element is the name of the person in the queue. Our arrays will be called **InsideQueue** and **OutsideQueue**.

The element limit for the **InsideQueue** should be 5.
Therefore, as long as there are elements in the **OutsideQueue** and spaces available within the boundary in the **InsideQueue**, we must pass the first element of the **OutsideQueue** to the last position of the **InsideQueue**.

At the end, print all the elements of the **InsideQueue** and then print all the elements of the **OutsideQueue**

Example:

Suppose there are 3 people in the inside queue and 4 people in the outside line:

```javascript=
const queueInside = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

// your code here
```

Write the code that will check the **OutsideQueue**, one element at a time, and if the **InsideQueue** has not yet reached the maximum limit of 5 people, you must pass the first person of the **OutsideQueue** to the last position of the **InsideQueue**, until it completes the limit of 5 people.

In the example given above, what should be printed on the console at the end of the program is:

```
[ 'Jose', 'Maria', 'Joao', 'Joana', 'Roberta' ]
[ 'Marcos', 'Felipe' ]
```
