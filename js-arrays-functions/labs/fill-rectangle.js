function fillRectangle(inner, outer, char) {
    
    let array = []
    let arrayWithin = []

    for (let i = 0; i < outer; i++) {
        array.push(arrayWithin)

        for (let x = 0; x < inner; x++) {
            arrayWithin.push(char)
            
        }
        arrayWithin = []
        
    }
    return array;
}

console.log(fillRectangle(2, 2, "*"))
console.log(fillRectangle(5, 3, "🔥"))

function rectangleToString(seperator, func){
    return func.join(seperator);
}

const str = rectangleToString("\n", fillRectangle(5, 3, "🔥"))

console.log(str)