function Car(make, speed) {
    this.make = make;
    this.speed = speed;
    this.accelerate = function () {
        this.speed += 10;
        console.log(this.make + ' accelerate: ' + this.speed);
    }
    this.brake = function () {
        this.speed -= 5;
        console.log(this.make + ' brake: ' + this.speed);
    }
}

// Data 1
const bmw = new Car('BMW', 120);
bmw.accelerate();
bmw.brake();

// Data 2
const mercedes = new Car('Mercedes', 95);
mercedes.accelerate();
mercedes.brake();