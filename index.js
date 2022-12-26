let randomNumber = Math.floor(Math.random() * 50 ) + 1;
const guessNumber = document.querySelector('.guess-number')
const SubmitGuess = document.querySelector('.submit-guess')
const guess = document.querySelector('.guess')
const result = document.querySelector('.result')
const lowOrHigh = document.querySelector('.lowOrHigh ')

let counter = 1;
let resetBtn;

function monitorGuess() {
    const playerGuess = Number(guessNumber.value);
    if(counter === 1) {
        guess.textContent = 'Previous guesses: ';
        console.log(guess)
    }
    guess.textContent += `${playerGuess}, `;

    if(playerGuess === randomNumber) {
        result.textContent = "congratulations, your guess is correct!";
        result.style.backgroundColor = 'green';
        lowOrHigh.textContent = " ";
        gameOver();
    }else if (counter === 10 ) {
        result.textContent = "GAME OVER";
        lowOrHigh.textContent = " ";
        gameOver();
    }else{
        result.textContent = " Wrong, you can still guess further";
        result.style.backgroundColor = "gray";
        if (playerGuess < randomNumber) {
            lowOrHigh.textContent = 'Your Last Guess Number is too Low';
        }else if (playerGuess > randomNumber) {
            lowOrHigh.textContent = 'Your Last Guess Number is too High';
        } 
    }

    counter++;
    guessNumber.value = " ";
    guessNumber.focus();
}
SubmitGuess.addEventListener('click', monitorGuess)

function gameOver() {
    guessNumber.disabled = true;
    SubmitGuess.disabled = true;
    resetBtn = document.createElement('button');
    resetBtn.textContent = "Start New Game";
    document.body.appendChild(resetBtn);
    resetBtn.addEventListener('click', resetGame)

}
function resetGame() {
    counter = 1;
    const resetParagraph = document.querySelectorAll('.paragraph-cont p');
    for (const resetPara of resetParagraph ) {
        resetPara.textContent = " ";
    }
    resetBtn.parentNode.removeChild(resetBtn);
    guessNumber.disabled = false;
    SubmitGuess.disabled = false;
    guessNumber.value = " ";
    guessNumber.focus();

    result.style.backgroundColor = "white";
    randomNumber = Math.floor(Math.random() * 50 ) + 1;

}
