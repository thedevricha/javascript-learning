/* Project: Number Guessing Game
Development points:
- Use Math.random() to generate a random number
- Implement a loop for multiple guessing attempts
- Use conditional statements to provide hints (higher/lower)
- Add a scoring system based on the number of attempts */

function runGame(){
    // Generate random number
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
    console.log("Guessing Number is " + randomNumber);
    let attempt = 0; // Initialize attempt counter
    let guess;
    let score = 100; // Initialize score
    let continueGame = true;
    while(continueGame){
        guess = parseInt(prompt("Guess a number between 1 and 100:"));
        attempt++;

        if(isNaN(guess) || guess < 1 || guess > 100){
            console.log("Please enter a valid number between 1 and 100.");
        }else if(guess > randomNumber){
            console.log("Guessing number is lower then entered number!");
        }else if(guess < randomNumber){
            console.log("Guessing number is higher then entered number!");
        }else{
            score -= attempt * 10; // Scoring system
            console.log('Correct! The number was '+randomNumber+' Your score: '+score+'  and attempts are: '+attempt);
            continueGame = false;
        }
    }

    if (confirm("Do you want to play again?")) {
        runGame(); // Restart the game
    }
}

runGame();