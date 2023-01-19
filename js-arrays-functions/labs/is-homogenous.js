function isHomogenous(array) {

    let previousType; // type of the last iteration
    let currentType; // type of the current iteration
    array.sort();
    
    // first iteration set the previousType
    if (Array.isArray(array[0])) {
        previousType = 'array';
    }else {
        previousType = typeof array[0];
    }

    // on every iteration check that previousType is the same as currentType
    for (let element of array) {

        if (Array.isArray(element)) {

            currentType = 'array';

        } else {

            currentType = typeof element;

        }  
        if (previousType !== currentType){

            console.log("false");
            return;

        }
    }
    console.log("true");
}

isHomogenous([1, 2, 3]) // true

isHomogenous(['a', 'b', 'c']) // true

isHomogenous([[2], 'Xavier']) // false

isHomogenous([[2], {colour: 'blue'}]) // false

isHomogenous([1, '2', 3]) // false