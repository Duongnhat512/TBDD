class CarlCl{
    constructor (make, speed){
        this.make = make;
        this.speed = speed;
    }
}

class EVCl extends CarlCl{
    constructor(make, speed, charge){
        super(make, speed);
        this.charge = charge;
    }

    chargeBattery(chargeTo){
        this.charge = chargeTo;
    }

    accelerate(){
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }

    brake(){
        this.speed -= 10;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
}

const tesla = new EVCl('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
tesla.brake();
