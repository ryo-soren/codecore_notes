// Thinking of a number

// Require our readLine module 
const readLine = require('readline');

// Create our interface to read input and output 
const rl = readLine.createInterface({
  input: process.stdin,
  outout: process.stdout,
});

// Set our variables and count 
const num = 7;
let count = 0;

// Set a default prompt and then output that prompt to the console 
rl.setPrompt(`I'm thinking of a number between 1 and 10...`);
console.log(rl.getPrompt());

// Readline on input, parse the integer and comapre to the set number, if it matches, close the script, if not reprompt by calling the function again 
rl.on('line', (answer) => {
  if (parseInt(answer) === num) {
    count++;
    console.log(`Guessed ${answer} correctly in ${count} guesses `);
    rl.close();
  } else {
    count++;
    console.log(`Nope. Try again.`);
    rl.prompt();
  }
});