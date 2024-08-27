const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1
game.scored.forEach((player, i) => {
    console.log(`Goal ${i + 1}: ${player}`);
});

// 2
let avgOdds = Object.values(game.odds).reduce((acc, odd) => acc + odd, 0) / Object.values(game.odds).length;
console.log(`Average odd: ${avgOdds.toFixed(2)}`);

// 3
for(const[team, odd] of Object.entries(game.odds)) {
    if(team === 'x') {
        console.log(`Odd of draw: ${odd}`);
    }else{
        console.log(`Odd of victory ${game[team]}: ${odd}`);
    }
}
// 4. Bonus
let scorers = {
    
};

game.scored.forEach(player => {
    if (scorers[player]) {
        scorers[player]++;
    } else {
        scorers[player] = 1;
    }
});

console.log(scorers);

