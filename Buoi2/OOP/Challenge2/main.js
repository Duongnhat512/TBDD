class CarlCl{
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
    }
    get speedUS(){
        return this.speed / 1.6;
    }
    set speedUS(value){
        this.speed = value * 1.6;
    }
    accelerate(){
        return this.speed += 10;
    }
    brake(){
        return this.speed -= 5;
    }
}

var carl = new CarlCl('Ford', 120);
console.log(`Name: ${carl.name} `);
console.log(`Speed US: ${carl.speedUS} `);
console.log(`Accelerate: ${carl.accelerate()} `);
console.log(`Brake: ${carl.brake()} `);

