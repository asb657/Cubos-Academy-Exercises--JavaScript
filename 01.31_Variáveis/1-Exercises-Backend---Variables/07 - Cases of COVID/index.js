function CovidCases(Po,x,t) {
    return Po*(x**(t/7))
  };


Po = 1000
x = 4
t = 100

 let covid = CovidCases(Po,x,t);
 console.log(covid);

 let covid_message = `The number of infecteds after ${t} days, considering that the initial infection starts in ${Po} people, 
 which each person infects ${x} more, reaches about ${Math.round(covid/1_000_000_000)} billion cases.`;
 console.log(covid_message);
