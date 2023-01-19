function sum(arr) {
    // 1st => [1,2,3,4]
    // 2nd => [2,3,4]
    // 3rd => [3,4]
    // 4th => [4]
    // 5th => []


    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + sum(arr.slice(1))
    }
}

console.log(sum([1,2,3,4]));

// Array destructuring

function sum([first, ...rest]) {
    if (rest.length < 1) {
        return first;
    }else {
        return first + sum(rest)
    }
}

// recursive factorial

function recursiveFactorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * recursiveFactorial(n-1)
    }   
}
console.log(recursiveFactorial(3));


// reverse a string
function reverse(str) {
    if (str.length === 0) {
        return ""
    } else {
        return str[str.length -1] + reverse(str.slice(0,-1))
    }
  }

console.log(reverse("hello"));


function sumRecursive(arr){
    if(arr.length === 0){
        return 0
    } else {
        return arr[0] + sumRecursive(arr.slice(1))
    }
  }

function sumIteration(arr){
    let sum = 0
    for (const element of arr) {
        sum += element
    }
    return sum
}

const array = []
let i = 1
while (array.length < 5000){
    array.push(i)
    i++
}


console.time("recursive")
console.log(sumRecursive(array))
console.timeEnd("recursive")


console.time("iteration")
console.log(sumIteration(array))
console.timeEnd("iteration")