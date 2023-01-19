const number1 = parseInt(process.argv[2])
const number2 = parseInt(process.argv[3])
const number3 = parseInt(process.argv[4])

const largest = Math.max(number1, number2, number3)

console.log(`The largest number is ${largest}`);