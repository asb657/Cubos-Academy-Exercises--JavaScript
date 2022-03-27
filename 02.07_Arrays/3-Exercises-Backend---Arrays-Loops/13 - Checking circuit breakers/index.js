const circuitBreakers = [false, false, true, false, false, true, false, false];

const on = [];
for (let i = 0; i < circuitBreakers.length; i++)
    if (circuitBreakers[i])
        console.log(i);