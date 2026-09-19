let targetNumber;

let userGuesses = [];

let attempts = 0;

let gameOver = false;

function generateNumber() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
  if (gameOver) {
    return;
  }

  const input = document.getElementById("guessInput");

  const feedback = document.getElementById("feedback");

  const guess = Number(input.value);

  

  if (!Number.isFinite(guess)) {
    feedback.textContent = "Please enter a valid number.";

    feedback.className = "error";

    return;
  }

  if (guess < 1 || guess > 100) {
    feedback.textContent = "Please enter a number between 1 and 100.";

    feedback.className = "error";

    return;
  }

  

  userGuesses.push(guess);

  attempts++;

  document.getElementById("attemptsDisplay").textContent = attempts;

  document.getElementById("previousGuesses").textContent =
    userGuesses.join(", ");

  if (guess === targetNumber) {
    feedback.textContent = " Correct! You guessed the number!";

    feedback.className = "success";

    gameOver = true;

    document.getElementById("submitButton").disabled = true;

    saveGame();
  } else if (guess < targetNumber) {
    feedback.textContent = "Too low! Try a higher number.";

    feedback.className = "warning";
  } else {
    feedback.textContent = "Too high! Try a lower number.";

    feedback.className = "warning";
  }

  input.value = "";
}


function saveGame() {
  const gameData = {
    attempts: attempts,

    guesses: userGuesses,

    gameOver: gameOver,
  };

  localStorage.setItem("guessGame", JSON.stringify(gameData));
}

document
  .getElementById("guessInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkGuess();
    }
  });

generateNumber();
