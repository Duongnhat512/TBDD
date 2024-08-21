const Mark = {
    name: 'Mark Miller',
    mass: 78,
    height: 1.69,
}

const John = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
}

const calcBMI = (person) => {
    return person.mass / person.height ** 2;
}

const markBMI = calcBMI(Mark);
const johnBMI = calcBMI(John);

const markHigherBMI = markBMI > johnBMI;

console.log(`Mark's BMI: ${markBMI.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI.toFixed(2)}`);

if (markHigherBMI) {
    console.log(`Mark's BMI is higher than John's`);
}else {
    console.log(`John's BMI is higher than Mark's`);
}