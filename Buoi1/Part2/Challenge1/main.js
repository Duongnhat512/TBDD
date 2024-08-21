let dolphins = []
let koalas = []

const calcAverage = () => {
    var dolphinsAverage = dolphins.reduce((a, b) => a + b, 0) / dolphins.length
    var koalasAverage = koalas.reduce((a, b) => a + b, 0) / koalas.length
    return [dolphinsAverage, koalasAverage]
}

const checkWinner = (dolphinsAverage, koalasAverage) => {
    if (dolphinsAverage >= 2 * koalasAverage) {
        console.log(`Dolphins win (${dolphinsAverage} vs. ${koalasAverage})`)
    } else if (koalasAverage >= 2 * dolphinsAverage) {
        console.log(`Koalas win (${koalasAverage} vs. ${dolphinsAverage})`)
    } else {
        console.log(`No one wins`)
    }
}

// Data 1
dolphins = [44, 23, 71]
koalas = [65, 54, 49]

const [dolphinsAverage, koalasAverage] = calcAverage()
checkWinner(dolphinsAverage, koalasAverage)

// Data 2
dolphins = [85, 54, 41]
koalas = [23, 34, 27]

const [dolphinsAverage2, koalasAverage2] = calcAverage()
checkWinner(dolphinsAverage2, koalasAverage2)