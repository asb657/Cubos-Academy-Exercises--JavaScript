function bmi(weight, height) {
    return (weight / (height*height))
  };


  weight = 80; //Kg
  height = 1.71; // m


 let result = Math.round(bmi(weight, height));
 console.log(result);

 let bmi_message = `The BMI of a person with ${weight} kg and ${height}m of height is ${result}. `;
 console.log(bmi_message);








