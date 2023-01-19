function printMulti(array){

    for (const element of array) {

        for (const item of element) {

            console.log(item);    

        }   
    }
}

const myArray = [[2,3,4], ["Hello CodeCore", 1, true]];
printMulti(myArray)