const readline = require("readline")

const r1 = readline.createInterface({
    input: process.stdin,
    // "process.stdin" is an object that represents input 
    // from the terminal
    
    output: process.stdout
    // "process.stdout" is an object that represents output 
    // from the terminal 

})

r1.question("What did you have for breakfast? \n", (answer) =>{
    // answer is what the user enters
    console.log(`Eww I hate ${answer}`);
    r1.close() // without this it will just hang in the environment
})