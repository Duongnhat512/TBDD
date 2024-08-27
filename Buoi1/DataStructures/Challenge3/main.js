const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];

// 2. 
gameEvents.forEach((value, key) => {
    if (value === '� Yellow card' && key === 64) {
        gameEvents.delete(key);
    }
});

// 3. 
const averageTime = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${averageTime} minutes`);

// 4.
gameEvents.forEach((value, key) => {
    console.log(`[${key <= 45 ? 'FIRST HALF' : 'SECOND HALF'}] ${key}: ${value}`);
});