document.querySelector("#guessButton").addEventListener("click", guess)
document.querySelector("#resetButton").addEventListener("click", initializeGame);

let randomNumber;
randomNumber = Math.floor(Math.random() * 99) + 1; 
let guessCount;
guessCount=0;
console.log("random: " + randomNumber);
let winnings;
winnings=0;
let losings;
losings=0;

document.querySelector("#resetButton").style.display = "none"
document.querySelector("#guessButton").style.display = "inline"


let correctNumber = randomNumber;
let correctMessage = "congratulations, you won!";
let tooHighMessage = "Guess input was high";
let tooLowMessage = "Guess input was low";
let invalidNumber = "Guess is out of range, enter a number between 1 and 99."
let losingMessage = "Out of guesses, you lost."

let guessInput = document.querySelector("#guessInput");
let guessButton = document.querySelector("#guessButton");
let guessResult = document.querySelector("#guessResult");
let guessesTotal = document.querySelector("#guessesTotal");
let gameW = document.querySelector("#gameW");
let gameL = document.querySelector("#gameL");


guessesTotal.textContent = guessCount;
gameW.textContent = winnings;
gameL.textContent = losings;


// function displayWinMessage(){
//     guessResult.textContent = correctMessage;
//     guessResult.style.color = "green";
// }


// guessButton.addEventListener("click", function (){

//     if(correctNumber == guessInput.value) {
//         guessResult.textContent = correctMessage;
//         guessResult.style.color = "green";
//         guessesTotal.textContent = guessCount;

//     } else if (guessInput.value < correctNumber || guessCount < 6){
//         guessResult.textContent = toolow;
//         guessResult.style.color = "yellow";
//         //guessesTotal.textContent = guessCount;
//         guessCount+=1;

//     } else if (guessInput.value > correctNumber || guessCount < 6){
//         guessResult.textContent = toHigh;
//         guessResult.style.color = "yellow";
//         //guessesTotal.textContent = guessCount;
//         guessCount+=1;

//     } else {
//         guessResult.textContent = losingMessage;
//         guessResult.style.color = "red";
//         guessesTotal.textContent = guessCount;

//     }
// })

function guess(){
    if (guessInput.value < 1 || guessInput.value > 99){
        guessResult.textContent = invalidNumber;
        guessResult.style.color = "grey";
        guessesTotal.textContent = guessCount;
        return;

    } else {
        guessCount++;

        if(correctNumber == guessInput.value) {
        guessResult.textContent = correctMessage;
        guessResult.style.color = "green";
        guessesTotal.textContent = guessCount;
        winnings++
        gameW.textContent = winnings;
        gameOver();

        } else {
            document.querySelector("#userGuesses").textContent += guessInput.value + "  ";
            if(guessInput.value < correctNumber && guessCount < 7){
            guessResult.textContent = tooLowMessage;
            guessResult.style.color = "orange";
            guessesTotal.textContent = guessCount;
            //guessesTotal.textContent = guessCount;

            } else if (guessInput.value > correctNumber && guessCount < 7){
            guessResult.textContent = tooHighMessage;
            guessResult.style.color = "orange";
            guessesTotal.textContent = guessCount;
            //guessesTotal.textContent = guessCount;

            } else {
            guessResult.textContent = losingMessage;
            guessResult.style.color = "red";
            guessesTotal.textContent = guessCount;
            guessesTotal.textContent = guessCount;
            losings++;
            gameL.textContent = losings;
            gameOver();
            }
        }
    }
    
}

function gameOver(){
    let guessButton = document.querySelector("#guessButton");
    let resetButton = document.querySelector("#resetButton");
    guessButton.style.display = "none";
    resetButton.style.display = "inline";

}

function initializeGame(){
    randomNumber = Math.floor(Math.random() * 99) + 1;
    guessCount = 0;
    guessesTotal.textContent = guessCount;
    document.querySelector("#resetButton").style.display = "none";
    document.querySelector("#guessButton").style.display = "inline";

    let guessInput = document.querySelector("#guessInput");
    guessInput.focus();
    guessInput.value = "";

    let guessResult = document.querySelector("#guessResult");
    guessResult.textContent = "";

    document.querySelector("#userGuesses").textContent = "";
}
    // else if(guessInput.value > correctNumber && guessCount < 7){
    //     guessResult.textContent = tooHigh;
    //     guessResult.style.color = "yellow";
    //     guessCount++;

    // } else if(guessInput.value < correctNumber && guessCount < 7){
    //     guessResult.textContent = tooHigh;
    //     guessResult.style.color = "yellow";
    //     guessCount++;

    // } else {
    //     guessResult.textContent = losingMessage;
    //     guessResult.style.color = "red";

    // }
    //})