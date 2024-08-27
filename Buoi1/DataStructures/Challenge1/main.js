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

let players1 = [...game.players[0]]
let players2 = [...game.players[1]]

let gk = [players1[0], players2[0]]
let fieldPlayers = [players1.slice(1), players2.slice(1)]

let allPlayers = [...players1, ...players2]

let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']


let { team1, draw, team2 } = game.odds;



let printGoals = (...players) => {
    console.log(`Number of goals scored: ${players.length}`);
    players.forEach(player => console.log(player));
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

console.log(team1 < team2 ? 'Team 1 is more likely to win' : 'Team 2 is more likely to win');

