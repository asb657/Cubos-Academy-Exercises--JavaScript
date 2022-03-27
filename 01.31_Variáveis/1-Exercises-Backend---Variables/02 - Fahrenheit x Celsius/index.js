function convertionFahrenheit(F) {
    return (F-32)/1.8
  };

  function convertionCelsius(C) {
    return (C*1.8+32)
  };

  F = 73;
  C = 23;

 let convertion_fahrenheit = Math.round(convertionFahrenheit(F));
 console.log(convertion_fahrenheit);

 let convertion_celsius = Math.round(convertionCelsius(C));
 console.log(convertion_celsius);

 let fahrenheit_message = `The convertion of ${F}°F to Celsius is ${convertion_fahrenheit} °C. `;
 console.log(fahrenheit_message);

 let celsius_message = `The convertion of ${C}°C to Fahrenheit is ${convertion_celsius} °F. `;
 console.log(celsius_message);

