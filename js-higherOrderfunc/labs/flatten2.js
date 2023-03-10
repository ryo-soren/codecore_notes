function flatten(arr){
    let output = []

    for (const element of arr) {

        if (Array.isArray(element)) {

            const x = flatten(element)
            x.map(val => {
                output.push(val)})
        } else {
            output.push(element)
        }   
    }
    return output;
}

console.log(flatten([ 1, 2, [3, [4, 5] ] ])); // returns [ 1, 2, 3, 4, 5 ]
console.log(flatten([ 'a', [ 'b', ['c'] ] ])); // returns [ 'a', 'b', 'c' ]
console.log(flatten([ [ 2, 3 ], [8, [5, 9], [4, 5]], 10])); // returns [ 2, 3, 8, 5, 9, 4, 5, 10 ]