const calcAverageHumanAge = ages => {
    return ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
               .filter(age => age >= 18)
               .reduce((sum, age, i, { length }) => sum + age / length, 0);
}

// Data 1
const ages1 = [5, 2, 4, 1, 15, 8, 3];
console.log(calcAverageHumanAge(ages1));

// Data 2
const ages2 = [16, 6, 10, 5, 6, 1, 4];
console.log(calcAverageHumanAge(ages2));