let car = {
    isOn: true,
    speed: 50,
    start: function () {
        if (this.isOn && this.speed === 0) {
          return `This car is already on.`
        } else {
            this.isOn = true;
           return `Starting the vehicle. Speed: ${this.speed}.`;
        }
    },
    shutDown: function () {
        if (!this.isOn) {
          return `This car is already on.`
      } else {
          this.isOn = false;
          this.speed = 0;
          return `Shutting down the vehicle. Speed: ${this.speed}.`;          
      }
    },
    accelerate: function (){
        if (!this.isOn) {
       return `It isn't possible to accelerate a car off .`
      } else {
          this.speed += 10
          return `Veiculo isOn, speed: ${this.speed}.`; 
      }
    },
    slowDown: function (){
        if (!this.isOn) {
        return `It isn't possible to slow down a car off `
      } else {
          this.speed -= 10
          if (this.speed < 1) {
            this.speed = 0;
        }
          return `Decelerated vehicle, speed: ${this.speed}.`; 
      }
    }
};

console.log(car.shutDown());
console.log(car.start());
console.log(car.start());
console.log(car.accelerate());
console.log(car.accelerate());
console.log(car.slowDown());
console.log(car.shutDown());
console.log(car.accelerate());
console.log(car.slowDown());