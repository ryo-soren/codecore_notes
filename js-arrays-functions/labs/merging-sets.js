function mergeSet(array1, array2){

    const newArray = array1.concat(array2)
    newArray.sort();
    let i = 0

    for (const element of newArray) {

        if(element === newArray[i + 1]){

            newArray.splice(element, 1)
            i++

        }else{

            i++

        }
    }

    return newArray;
}

let array1 = [1, 2, 3];

let array2 = [3, 4, 5];

console.log(mergeSet(array1, array2)); // [1, 2, 3, 4, 5]