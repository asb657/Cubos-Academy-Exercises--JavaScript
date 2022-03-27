function avarageSpeed(distance, time) {
    return (distance/time)*3.6
  };


distance = 100 // meters
time = 30 // seconds

 let speed = Math.round(avarageSpeed(distance,time));
 console.log(speed);

 let speed_message = `The avarage speed considering a distance of ${distance} meters and a time of ${time} seconds is equal to ${speed} km/h.`;
 console.log(speed_message);

 
