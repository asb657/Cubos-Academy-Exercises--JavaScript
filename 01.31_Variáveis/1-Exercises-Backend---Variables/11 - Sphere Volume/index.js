function volumeSphere(diameter) {
    return (4*Math.PI*((diameter/2)**3))/3
  };


  diameter = 10; //cm
 

 let volume_sphere = volumeSphere(diameter);
 console.log(volume_sphere);


 let sphere_message = `The volume of a sphere of radius ${(diameter/2).toFixed(0)} is ${(volume_sphere/Math.PI).toFixed(2)} π.`;
 console.log(sphere_message);



