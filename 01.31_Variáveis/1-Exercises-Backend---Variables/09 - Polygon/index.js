function angleSum(sides) {
    return (180*(sides-2))
  };

  function angleValues(sides) {
    return (180*(sides-2)/sides)
  };

sides = 6 // polygon sides 

 let angle_sum = angleSum(sides);
 console.log(angle_sum);

 let angle_values = angleValues(sides);
 console.log(angle_values);


 let angulos_mensagem = `If the polygon has ${sides} sides the angle sum is ${angle_sum} and each angle is equal to ${angle_values}°.`;
 console.log(angulos_mensagem);

