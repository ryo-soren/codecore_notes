function zip(arr1, arr2){
    
    if (arr1.length === arr2.length) {
    
        let i = 0
        let newArray2 = []
        
        arr1.forEach((element, i) => {

            let newArray1 = []
            newArray1.push(element);
            newArray1.push(arr2[i]);
            newArray2.push(newArray1)
            i++
        
        })

        console.log(newArray2);  

    }else{

            console.log(undefined);
            return;

        }
    }
 
zip([1, 2, 3], [4, 5, 6]) // [[1, 4], [2, 5], [3, 6]]
zip(['firstName', 'lastName'], ['Jon', 'Snow']) // [['firstName', 'Jon'], ['lastName', 'Snow']]
zip([0, 0, 0], []) // undefined
zip(['x', 'y', 'z'], [5, 6, 10]) // [['x', 5], ['y', 6], ['z', 10]]