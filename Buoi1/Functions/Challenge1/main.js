const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0)
};

// 1.
registerNewAnswer = () => {
    let answer = Number(prompt(`${poll.question}\n${poll.options.join('\n')}`));
    if (answer >= 0 && answer < poll.answers.length){
        poll.answers[answer]++;
    }else{
        alert('Invalid answer');
    }
    displayResults(poll.answers);
}

// 2. 
document.addEventListener('DOMContentLoaded', function() {
    document.body.append(document.createElement('button'));
    document.querySelector('button').textContent = 'Answer poll';
    document.querySelector('button').addEventListener('click', registerNewAnswer);
});

// 3.

displayResults = (type) => {
    if (Array.isArray(type)){
        console.log(type);
    }else if (typeof type === 'string'){
        console.log(`Poll results are ${type.join(', ')}`);
    }
}

// Data 1
displayResults([5, 2, 3])

// Data 2
displayResults([1, 5, 3, 9, 6, 1])