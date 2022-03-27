var waterConsumption = 105;

const highRisk = waterConsumption < 1.5;
const moderateRisk = waterConsumption >= 1.5 && waterConsumption < 3.0;
const lowRisk = waterConsumption >= 3.0;

if (waterConsumption > 100) {
    console.log(`The Horn of Africa awaits you - Did you know that dromedaries can drink more than 100L of water in one go?`);
} else if (highRisk){
    console.log(`High Risk - You are drinking too little water, drink more water!`);
} else if (moderateRisk) {
    console.log(`Moderate Risk - You are drinking too little water, drink more!`);
} else if (lowRisk) {
    console.log(`You are drinking a good amount of water, congratulations!`);
} 