function fibonacci(digit) {


let array = [0,1]

for (let i = 2; i < digit; i++) {
        let runningTotal = 0
        runningTotal = (array[i-1])+(array[i-2])
        array.push(runningTotal);
    }
    return array;      
}

console.log(fibonacci(10))