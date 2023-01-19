let csvData = `


id,firstName,lastName,email
1,jane,doe,wildmirror@yahoo.com

2,john,doe,tamepool@hotmail.com
3,sherlock,holmes,mag@glass.com

4,natalia,romanov,8legged@ninja.com

5,peter,quill,starlord@gmail.com

`

function parseCSV(data) {

    const arr = data.split("\n")
    let output = []

    // removes empty values 
    let arrCondensed = []
    arr.map(element =>{
        if (element !== "") {
            arrCondensed.push(element)
        }
    })

    // splits the info of people into rows and indexes into individual elements
    const rowID = arrCondensed.slice(1)
    const index = arrCondensed.slice(0,1)[0].split(",")

    // splits the elements in the ID row
    for (const row of rowID) {
        let splitID = row.split(",")

        // resets the object for each iteration
        let object = {}

        // links the index with the corresponding value
        for (let i = 0; i < splitID.length; i++) {

            object[index[i]] = splitID[i]

        }
        
        // adds the object to the output array before resetting on the next loop 
        output.push(object)        
    }

    return output;
}



let users = parseCSV(csvData)
console.log(users)

function search(funcOutput, name) {

    for (const element of funcOutput) {
        if (element["firstName"] === name || element["lastName"] ===  name) {
            return element
        }
    }  
}

console.log(search(users, "jane"));