function findDuplicates(arrayOfVal){

    arrayOfVal.sort()
    let arrayOfDup = []

    for (let i = 0; i < arrayOfVal.length; i++) {

        const element = arrayOfVal[i];
        
        if(element === arrayOfVal[i+1]){

            arrayOfDup.push(element)
        }
    
    }


    console.log(arrayOfDup);
}

findDuplicates([1, 1, 3, 4, 5, 6, 7, 8, 9, 9]) // returns [1, 9]
findDuplicates(['Bob', 'bob', 'Rob', 'Rob', 1, 2, 3, 4, 4]) // returns ['Rob', 4]