function distanceBtw2Points(xA,xB,yA,yB) {
    return Math.sqrt((xB - xA)**2 + (yB - yA)**2)
  };


xA = -3
xB = 2
yA = -11
yB = 1

 let distance = distanceBtw2Points(xA,xB,yA,yB);
 console.log(distance);

 let distance_message = `The distance between the points A(${xA},${yA}) and B(${xB},${yB}) is ${distance}.`;
 console.log(distance_message);


