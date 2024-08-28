function Car(make, speed, charge){
    this.make = make;
    this.speed = speed;
}

function EV(make, speed, charge){
    Car.call(this, make, speed, charge);

    EV.prototype.chargeBattery = function(chargeTo){
        this.charge = chargeTo;
    }

    EV.prototype.accelerate = function(){
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }

    EV.prototype.brake = function(){
        this.speed -= 10;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
}

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);

tesla.accelerate();
tesla.brake();

