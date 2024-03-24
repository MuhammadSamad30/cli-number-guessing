#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generate number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "GuessedNumber",
        type: "number",
        message: "Enter your guess between 1 to 10:",
    }
]);
if (answers.GuessedNumber === randomNumber) {
    console.log("Congratulations!");
}
else {
    console.log("You'r failed");
}
