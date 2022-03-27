![](https://i.imgur.com/xG74tOh.png)

# Exercise 14

## Ingested Water Consumption Control

Cubos Academy, concerned about the health of its students, needs a program that identifies if they are drinking enough water daily.

The table below reports the risk of health complications based on daily water intake.

| Quantity (liters) | Risk | Message |
| -------------------- | ---------- | -------------------------------------------------- ------------------------------ |
| Less than 1.5 | HIGH | High Risk - You are drinking too little water, drink more water! |
| From 1.5 to 3 | MODERATE | Moderate Risk - You are drinking too little water, drink more! |
| More than 3 | LOW | Low Risk - You are drinking a good amount of water, congratulations! |

**a)** Make a program that checks the amount of water ingested and print the message with the diagnosis as shown in the table above.

```javascript=
//amount of water ingested in litres.
const amountOfWaterIngested = 2;
```

For the example above, the program should print the message:

`Moderate Risk - You are drinking too little water, drink more!`

