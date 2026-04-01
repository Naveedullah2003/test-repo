let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess) {
        displayMessage('No number!');
    } else if (guess === secret) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secret;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secret) {
        if(score > 1) {
            displayMessage(guess > secret ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secret = Math.trunc(Math.random() * 20) + 1; // Generate a new secret number // tranc() removes the decimal part of a number, effectively rounding it down to the nearest integer. This is useful when you want to generate a random integer within a specific range.
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
});
