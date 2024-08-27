function calcAverageHumanAge(ages){
    ages.forEach((dogAge, i) => {
        if(dogAge <= 2){
            ages[i] = 2 * dogAge;
        }else{
            ages[i] = 16 + dogAge * 4;
        }
    });
    const adults = ages.filter(age => age >= 18);
    console.log(adults);
    const average = adults.reduce((sum, age) => sum + age, 0) / adults.length;
    return average;
}

// Data 1
const ages1 = [5, 2, 4, 1, 15, 8, 3];
console.log(calcAverageHumanAge(ages1));

// Data 2
const ages2 = [16, 6, 10, 5, 6, 1, 4];
console.log(calcAverageHumanAge(ages2));
