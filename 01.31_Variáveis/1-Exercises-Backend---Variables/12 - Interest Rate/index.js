function interestRate2(principal2,amount2,times) {
    return ((amount2/principal2)**(1/times))-1
  };

principal2 = 60_000
amount2 = 90_000
times = 24


 let rate = interestRate2(principal2,amount2,times);
 console.log(rate);


 let rate_message = `Its ${principal2} reais lean hand an interest rate of ${(rate*100).toFixed(2)}%. After ${times} months you will have paid ${amount2} BRL.`;
 console.log(rate_message);

