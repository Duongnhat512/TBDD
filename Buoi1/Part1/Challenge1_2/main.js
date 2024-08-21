var mass;
var height;

// Data 1
mass = 78;
height = 1.69;

var markBMI1 = mass / height ** 2;

mass = 92;
height = 1.95;

var johnBMI1 = mass / height ** 2;

var markHigherBMI1 = false;

console.log("Mark's BMI 1 " + markBMI1);
console.log("John's BMI 1 " + johnBMI1);

if (markBMI1 > johnBMI1) {
  markHigherBMI1 = true;
  console.log(`Mark's BMI (${markBMI1.toFixed(2)}) is higher than John's (${johnBMI1.toFixed(2)})`);
}else{
  console.log(`John's BMI (${johnBMI1.toFixed(2)}) is higher than Mark's (${markBMI1.toFixed(2)})`);
}

// Data 2
mass = 95;
height = 1.88;

var markBMI2 = mass / height ** 2;

mass = 85;
height = 1.76;

var johnBMI2 = mass / height ** 2;

markHigherBMI2 = false;

console.log("Mark's BMI 2 " + markBMI2);
console.log("John's BMI 2 " + johnBMI2);

if (markBMI2 > johnBMI2) {
    markHigherBMI2 = true;
    console.log(`Mark's BMI (${markBMI2.toFixed(2)}) is higher than John's (${johnBMI2.toFixed(2)})`);
}else{
    console.log(`John's BMI (${johnBMI2.toFixed(2)}) is higher than Mark's (${markBMI2.toFixed(2)})`);
}
