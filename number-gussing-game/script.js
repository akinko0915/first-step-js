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
    // 数値変換をする
    const userGuess = Number(guessField.value);
    guesses.innerHTML = "Guessing Count: " + guessCount;
    lastResult.textContent = `Previous guesses: ${userGuess}`;

    if (userGuess == randomNumber){
        result_element.textContent = "Correct!";
        // 背景色を追加
        result_element.style.backgroundColor = "green"
        guessSubmit.disabled = true
    } else {
        // 背景色を追加
        result_element.style.backgroundColor = "red"

        if (guessCount != 10) {
            if (userGuess > randomNumber){
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
    //フィールドをリセット
    guessField.value = ""
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);
resetButton.addEventListener("click", function() {
    guesses.innerHTML = null
    lastResult.innerHTML = null
    result_element.textContent = "";
    guessSubmit.disabled = false;
    guessField.value = null;
    // リセット時ランダム更新
    randomNumber = Math.floor(Math.random() * 100) + 1;
})