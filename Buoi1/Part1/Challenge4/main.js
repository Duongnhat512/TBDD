var tips;
var billValue;

function calculateTip(billValue) {
    var tips = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
    // task 1
    tips = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
    total = billValue + tips;
    
    // task 2
    console.log(`The bill was ${billValue}, the tip was ${tips}, and the total value ${total}`);
}
// Data 1
billValue = 275;
calculateTip(billValue);

// Data 2
billValue = 40;
calculateTip(billValue);

// Data 3
billValue = 430;
calculateTip(billValue);


