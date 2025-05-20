//generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
//variable attemps tracks attempts
let attempts = 0;

//function to check guess
function checkGuess(){
    const guessInput = document.getElementById('guess');
    const feedback = document.getElementById('feedback');

    const userGuess = Number(guessInput.value);
    if(!userGuess || userGuess <1 || userGuess > 100){
        feedback.innerHTML = 'Please enter a valid number between 1 and 100';
        return;
    }

    attempts++;

    if(userGuess === randomNumber){
        feedback.innerHTML = `Congratulations You Guessed the Number in ${attempts} attempts`;
        feedback.style.color = 'green';

    } else if(userGuess > randomNumber){
        feedback.innerHTML = "Too high try again";
        feedback.style.color = 'red';
    
    } else {
        feedback.innerHTML = "Too low try again";
        feedback.style.color = 'red';
    }
}
function resetGame(){
    randomNumber = Math.floor(Math.random * 100) + 1;
    attempts = 0;
    document.getElementById('guess').value = " ";
    document.getElementById('feedback').innerHTML = " ";
}