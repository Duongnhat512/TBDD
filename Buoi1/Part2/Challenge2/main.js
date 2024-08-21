calcTip = (billValue) => {
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
}

// Test function
let billValue = 100;
let tip = calcTip(billValue);
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`);


let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(`Total: (${total})`);