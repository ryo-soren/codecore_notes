const arr = [1,2,3,4,5]

arr.forEach(element => console.log(element))

arr.forEach((element, index, array) => 

    console.log(`Element: ${element} Index: ${index} Array: ${array}`)
    
    )

// recreating forEach method:

function ForEach(callbck, array) {

    for (let i = 0; i < array.length; i++) {
        callbck(`Element: ${array[i]} Index: ${i} Array: ${array}`);
    }
    
}

ForEach(console.log, arr)