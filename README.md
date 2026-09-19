# 🎯 Number Guessing Game

A simple and interactive **Number Guessing Game** built using **HTML, CSS, and JavaScript**.

The computer generates a random number between **1 and 100**, and the player has to guess the correct number. After each guess, the game gives feedback such as **Too High**, **Too Low**, or **Correct**.

## 🚀 Features

* 🎲 Generates a random number between 1 and 100
* 🔢 Allows the user to enter a number
* ✅ Checks whether the guessed number is correct
* ⬆️ Shows **Too High** when the guess is greater than the target
* ⬇️ Shows **Too Low** when the guess is smaller than the target
* 📊 Displays the total number of attempts
* 📝 Displays all previous guesses
* ⌨️ Supports pressing **Enter** to submit a guess
* 💾 Saves game data using `localStorage`
* 🛑 Disables the Submit button after the correct answer
* 🔄 Includes a **New Game** button in the UI

## 🛠️ Technologies Used

* **HTML5** – Structure of the game
* **CSS3** – Styling and layout
* **JavaScript** – Game logic and DOM manipulation
* **LocalStorage** – Saving game data in the browser

## 📁 Project Structure

```text
Number-Guessing-Game/
│
├── index.html
├── index.js
├── style.css
└── README.md
```

## 🎮 How the Game Works

### 1. Generate Random Number

When the game starts, JavaScript generates a random number between 1 and 100.

```javascript
function generateNumber() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
}
```

### 2. Enter Your Guess

The user enters a number between **1 and 100** in the input field and clicks **Submit**.

The user can also press the **Enter** key to submit the guess.

### 3. Validate the Input

The game checks whether the entered value is a valid number and whether it is between 1 and 100.

```javascript
if (guess < 1 || guess > 100) {
  feedback.textContent =
    "Please enter a number between 1 and 100.";
}
```

### 4. Compare the Guess

The entered number is compared with the randomly generated number.

* If the guess is **smaller** → `Too low!`
* If the guess is **greater** → `Too high!`
* If the guess is **equal** → `Correct!`

### 5. Track Attempts

Every valid guess increases the attempt count.

```javascript
attempts++;
```

The previous guesses are also displayed on the screen.

### 6. Save Game Data

When the user guesses the correct number, the game stores the game information in `localStorage`.

```javascript
localStorage.setItem(
  "guessGame",
  JSON.stringify(gameData)
);
```

The saved data contains:

```javascript
{
  attempts: attempts,
  guesses: userGuesses,
  gameOver: gameOver
}
```

## 💻 How to Run

1. Download or clone the project.
2. Open the project folder.
3. Make sure these files are present:

```text
index.html
index.js
style.css
```

4. Open `index.html` in your browser.
5. Start guessing a number between **1 and 100**.

You can also use **VS Code Live Server** to run the project.

## 🧠 JavaScript Concepts Used

This project demonstrates several basic JavaScript concepts:

* Variables using `let`
* Arrays
* Functions
* `if / else if / else`
* `Math.random()`
* `Math.floor()`
* Number validation
* DOM manipulation
* `addEventListener()`
* Keyboard events
* `localStorage`
* JSON serialization using `JSON.stringify()`
* Template-free string joining using `Array.join()`

## 📌 Example

Suppose the computer generates:

```text
Target Number: 57
```

The user enters:

```text
30
```

Output:

```text
Too low! Try a higher number.
```

Then the user enters:

```text
80
```

Output:

```text
Too high! Try a lower number.
```

Finally, the user enters:

```text
57
```

Output:

```text
Correct! You guessed the number!
```

## 🔮 Future Improvements

The project can be improved by adding:

* 🔄 Fully working **New Game** functionality
* 💾 Loading the saved game from `localStorage`
* ⏱️ Timer
* 🏆 Best score / minimum attempts
* 🎨 Better UI and animations
* 🔊 Sound effects
* 🌙 Dark mode
* 📱 Improved mobile responsiveness
* 🎚️ Different difficulty levels

## 👨‍💻 Author

**Prince Nandoliya**


