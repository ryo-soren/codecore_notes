const plus = (a, b) => a + b;
const numbers = [1, 2, 3, 4, 5];

function reduce(array, func, initialVal){

    let total = initialVal
    for (let i = 0; i < array.length; i++) {
        
        total = func(array[i], total)
        
    }
    return total;
}

console.log(reduce(numbers, plus, 0));