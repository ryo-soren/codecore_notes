const randomNumber = () => Math.round(Math.random() * 5)

const values = {} // {"a": x}  values[a] = x 

for (let index = 0; index <= 10000000; index++) {
    const numb = randomNumber()
    if (values[numb]) {
        values[numb]++
    } else {
        values[numb] = 1
    }
}

const largest = Math.max(...Object.values(values));

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

console.log(values);
console.log(`Most common number is ${getKeyByValue(values, largest)} at ${largest} times`);

