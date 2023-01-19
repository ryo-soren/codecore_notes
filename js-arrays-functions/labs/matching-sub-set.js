function matchingSet(array1, array2) {

    let output = []

    for (let element of array1){
        
        for (let element2 of array2) {

            if (element === element2) {

                output.push(element)
                
            }
        }
    }

    output.sort();
    let x = 0
    for (let item of output) {
        
        if(item === output[x+1]){

            output.splice(x+1, 1)

        }else{
            x++
        }
    }
    return output;
}

console.log(matchingSet([1, 2, 3, 4], [3, 4, 5, 6, 7])) // [3, 4]

console.log(matchingSet(['j', 'a', 'n', 'e'], ['j', 'o', 'h', 'n', 'n', 'y'])) // ['j', 'n']

