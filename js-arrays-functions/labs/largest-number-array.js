function largestNumber(array) {
    
    const largest = Math.max(...array)

    console.log(`The largest is ${largest}`);
    
}

largestNumber([40, 2, 13, 34, 42]) // returns 42
largestNumber([1, 2, 3, 4, 5, 6]) // returns 6
largestNumber([99, 77, 55, 33, 22, 11]) // returns 99