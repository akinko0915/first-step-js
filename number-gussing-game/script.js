let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 0;
const resetButton = document.querySelector(".resetButton");
const result_element = document.createElement("p")

function checkGuess(){
    guessCount++
    guesses.innerHTML = "Guessing Count: " + guessCount;
    lastResult.innerHTML = "Previous guesses: " + guessField.value;

    if (guessField.value == randomNumber){
        result_element.textContent = "Correct!";
        guessSubmit.disabled = true
    } else {
        if (guessCount != 10) {
            if (guessField.value > randomNumber){
                result_element.textContent = "Last guess was too high"
                lowOrHi.appendChild(result_element);
            } else {
                result_element.textContent = "Last guess was too low"
                lowOrHi.appendChild(result_element);
            }
        } else {
            result_element.textContent = "Gameover!";
            guessSubmit.disabled = true
        }
    }
}

guessSubmit.addEventListener("click", checkGuess);
resetButton.addEventListener("click", function() {
    guesses.innerHTML = null
    lastResult.innerHTML = null
    result_element.textContent = "";
    guessSubmit.disabled = false;
    guessField.value = null
})