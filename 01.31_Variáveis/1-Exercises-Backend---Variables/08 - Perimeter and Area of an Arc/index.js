function arcLength(radius) {
    return (2*Math.PI*radius)
  };

  function arcArea(radius) {
    return (Math.PI*radius**2)
  };


  radius = 20; //cm
 

 let length = arcLength(radius);
 console.log(length);

 let area = arcArea(radius);
 console.log(area);

 let length_message = `The length of an arc whose radius is ${radius} cm is equal to ${Math.round(length)} cm.`;
 console.log(length_message);

 let area_message = `The area of an arc whose radius is ${radius} cm is equal to ${Math.round(area)} cm2.`;;
 console.log(area_message);
