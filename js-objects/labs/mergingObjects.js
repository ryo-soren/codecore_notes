function mergeSet(object1, object2){

    const combinedObject = {}

    for (const key in object1) {
        
        combinedObject[key] = object1[key] 

        for (const key2 in object2) {

                combinedObject[key2] = object2[key2] 

        }
    }

    return combinedObject;
}

console.log(mergeSet(

    {firstName: 'Ron', lastName: 'Wesley', occupation: 'Wizard'},
  
    {firstName: 'Harry', lastName: 'Potter'}))