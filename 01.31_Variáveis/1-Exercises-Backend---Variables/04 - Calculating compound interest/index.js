function amountInterestRate(principal,interestRate,time) {
    return principal*((1+interestRate)**time)
  };


principal = 1000
interestRate = 0.125
time = 5

 let amount = Math.round(amountInterestRate(principal,interestRate,time));
 console.log(amount);

 let amount_message = `The amount, considering R$ ${principal} as principal, ${interestRate*100}% as the interest rate and ${time} years is equal to R$${amount}.`;
 console.log(amount_message);

