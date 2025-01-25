// for (let i = 0; i <= 30; i++) {
//     if(i % 3 === 0) {
//         console.log("Bizz")
//     }
//     else if(i % 5 === 0) {
//         console.log("Fuzz")
//     }
//     else if(i % 3 === 0 && i % 5 === 0) {
//         console.log("BizzFuzz")
//     }
//     else
//     console.log(i)
// }

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guess = null;

console.log("Welcome to the Guessing Game! 🎉");

// Keep guessing until the correct number is guessed
while (guess !== randomNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100: "), 10);
    attempts++;

    if (guess < randomNumber) {
        console.log("Too low! Try again.");
    } else if (guess > randomNumber) {
        console.log("Too high! Try again.");
    } else if (guess === randomNumber) {
        console.log(`🎉 Correct! You guessed the number in ${attempts} attempts.`);
    } else {
        console.log("Please enter a valid number.");
    }
}
