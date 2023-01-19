const dices = process.argv[2]
const sides = process.argv[3]

let total = 0;

for (let i = 0; i < dices; i++){

    let roll = Math.floor(Math.random() * sides) + 1
    console.log(`roll = ${roll}`);
    total += roll
    
}

console.log(`Average roll = ${total/dices}`);
console.log(`Total dice = ${dices}`);
