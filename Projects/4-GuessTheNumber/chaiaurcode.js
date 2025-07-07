let random =parseInt(Math.random() * 100 + 1)


const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guesseslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')

const p = document.createElement('p')
let prevGuess = [];
let numGuess = 1;
let playgame = true;

if (playgame) {
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
        
    });
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert(`Enter a valid number`)
    }else if (guess < 1) {
        alert(`Enter a valid number or more than 1`)
    }else if (guess > 100) {
        alert(`Enter a valid number or less than 100`)
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayMessage(guess);
            displayMessage(`Game Over. Random number was ${guess}`)
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if (numGuess === 11) {
        displayMessage(`You won the game`)
    }else if (guess < random) {
        displayMessage(`Guess is TOO low`)
    }
    else if (guess > random) {
        displayMessage(`Guess is TOO high`)
    }
}
function displayGuess(guess){
    userInput.value=""
    guesseslot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}
function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
    userInput.value=""
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">start new game</h2>`
    startover.appendChild(p);
    playgame = false
    newGame()
}
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        random =parseInt(Math.random() * 100 + 1)
        prevGuess=[]
        numGuess=1
        guesseslot.innerHTML=""
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startover.removeChild(p)

        playgame=true
    })
}   