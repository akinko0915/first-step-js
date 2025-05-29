let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 0;
let resetButton;
const result_element = document.createElement("p")

function checkGuess(){
    guessCount++
    guesses.innerHTML = guessCount;
    lastResult.innerHTML = guessField.value;
  
    if (guessField.value == randomNumber){
        result_element.textContent = "Correct!";
        guessSubmit.disabled = true
    } else {
        if (guessCount != 10) {
            if (guessField.value > randomNumber){
                result_element.textContent = "higher"
                lowOrHi.appendChild(result_element);
            } else {
                result_element.textContent = "lower"
                lowOrHi.appendChild(result_element);
            }
        } else {
            result_element.textContent = "Gameover!";
            guessSubmit.disabled = true
        }
    }    
}

guessSubmit.addEventListener("click", checkGuess);
