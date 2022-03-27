function cylinderArea(radius,height) {
    return (2*Math.PI*radius*(radius+height))
  };


  radius = 5; //cm
  height = 20; //cm

 let cylinder_area = cylinderArea(radius,height);
 console.log(cylinder_area);


 let cilindro_message = `The area of a cylinder which radius is equal to ${radius} cm and height of ${height} cm is ${cylinder_area.toFixed(2)} cm2`;
 console.log(cilindro_message);
