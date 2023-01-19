function iteration(array) {

    let maximum = array[0]

    for (const element of array) {
        if (element > maximum) {
            maximum = element  
        }else {
            continue;
        }        
    }
    return maximum;
}

const numbers = [3, 1, 4, 6, 9, 0]

console.log(iteration(numbers));


// ////Step-1
// [3, 3, 4, 6, 9, 0]
// ////Step-2
// [3, 4, 6, 9, 0]
// ////Step-3
// [3, 4, 6, 9, 0]
// ////Step-4
// [4, 6, 9, 0]
// ////Step-5
// [4, 6, 9, 0]
// ////Step-6
// [6, 9, 0]
// ////Step-7
// [6, 9, 0]
// ///Step-8
// [9, 0]
// ///Step-9
// [9, 9]
// ///Step-9
// [9]

function maxRecur(arr)
{
    if(arr.length === 1){
        return arr[0]
    }

    if(arr[0] > arr[1]){
        arr[1] = arr[0]
    }

    return maxRecur(arr.slice(1))

}

console.log(maxRecur(numbers));