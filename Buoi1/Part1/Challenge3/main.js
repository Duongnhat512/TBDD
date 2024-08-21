// Data 1
var dolphins = [96, 108, 89];
var koalas = [88, 91, 110];

var dolphinsAverage =  dolphins.reduce((a, b) => a + b, 0) / dolphins.length;
var koalasAverage = koalas.reduce((a, b) => a + b, 0) / koalas.length;

console.log('Dolphins average: ' + dolphinsAverage.toFixed(2));
console.log('Koalas average: ' + koalasAverage.toFixed(2));

if(dolphinsAverage > koalasAverage){
    console.log('Dolphins win');
}else if(dolphinsAverage < koalasAverage){
    console.log('Koalas win');
}
else{
    console.log('Draw');
}

// Bonus 1
var dolphinsBonus = [97, 112, 101];
var koalasBonus = [109, 95, 123];

var dolphinsBonusAverage =  dolphinsBonus.reduce((a, b) => a + b, 0) / dolphinsBonus.length;
var koalasBonusAverage = koalasBonus.reduce((a, b) => a + b, 0) / koalasBonus.length;

console.log('Dolphins bonus average: ' + dolphinsBonusAverage.toFixed(2));
console.log('Koalas bonus average: ' + koalasBonusAverage.toFixed(2));

if(dolphinsBonusAverage > koalasBonusAverage){
    if(dolphinsBonusAverage >= 100){
        console.log('Dolphins win');
    }
    else{
        console.log('No winner');
    }
}else if(dolphinsBonusAverage < koalasBonusAverage){
    if(koalasBonusAverage >= 100){
        console.log('Koalas win');
    }
    else{
        console.log('No winner');
    }
}else{
    console.log('Draw');
}


// Bonus 2
var dolphinsBonus2 = [97, 112, 101];
var koalasBonus2 = [109, 95, 106];

var dolphinsBonus2Average =  dolphinsBonus2.reduce((a, b) => a + b, 0) / dolphinsBonus2.length;
var koalasBonus2Average = koalasBonus2.reduce((a, b) => a + b, 0) / koalasBonus2.length;

console.log('Dolphins bonus 2 average: ' + dolphinsBonus2Average.toFixed(2));
console.log('Koalas bonus 2 average: ' + koalasBonus2Average.toFixed(2));

if(dolphinsBonus2Average > koalasBonus2Average){
    if(dolphinsBonus2Average >= 100){
        console.log('Dolphins win');
    }
    else{
        console.log('No winner');
    }
}
else if(dolphinsBonus2Average < koalasBonus2Average){
    if(koalasBonus2Average >= 100){
        console.log('Koalas win');
    }
    else{
        console.log('No winner');
    }
}else{
    if(dolphinsBonus2Average >= 100 && koalasBonus2Average >= 100){
        console.log('Draw');
    }else{
        console.log('No winner');
    }
}