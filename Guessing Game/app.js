let numRange = parseInt(prompt("Enter a maximum number..."));
let isNum = false;
let guessCount = 1;

// while (!isNum) {
//   if (isNaN(numRange) || numRange <= 0) {
//     alert("Please enter a valid positive number.");
//     numRange = parseInt(prompt("Enter a maximum number..."));
//   } else {
//     isNum = true;
//   }
// }

while (!numRange || isNaN(numRange) || numRange <= 0) {
  alert("Please enter a valid positive number.");
  numRange = parseInt(prompt("Enter a maximum number..."));
}

const generatedNumber = Math.floor(Math.random() * numRange) + 1;
let guessNumber = prompt("Guess a number between 1 and " + numRange);
let correct = false;

while (!correct) {
  if (parseInt(guessNumber) === generatedNumber) {
    console.log(
      "Yayy, you got it right!. It took you " + guessCount + " guesses."
    );
    correct = true;
  } else if (guessNumber < generatedNumber) {
    guessNumber = prompt("Higher!");
    guessCount++;
  } else if (guessNumber > generatedNumber) {
    guessNumber = prompt("Lower!");
    guessCount++;
  } else if (guessNumber.toLowerCase() === "q") {
    console.log("Game cancelled.");
    break;
  } else {
    guessNumber = prompt("Invalid input, please try again.");
  }
}
