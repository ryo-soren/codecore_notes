function alphabet() {

    const alphaIndex = Array.from(Array(26).keys()).map((i) => i + 65);
    const arrayOfletters = alphaIndex.map((x) => String.fromCharCode(x).toLowerCase());
    return arrayOfletters;
}

function alphaRange(char1, char2) {
    
    const alphabetArray = alphabet()
           
    for (const letter of alphabetArray) {

        if(char1 === letter){
            var indexOfFront = alphabetArray.indexOf(letter)
        }
    }

    for (const letter2 of alphabetArray) {

        if(char2 === letter2){
            var indexOfEnd = alphabetArray.indexOf(letter2)
        }
    }

    if (indexOfFront > indexOfEnd) {
        
        const output2 = alphabetArray.slice(indexOfEnd, indexOfFront + 1).reverse()
        return output2
    }

    const output = alphabetArray.slice(indexOfFront, indexOfEnd+1)
    return output;
}

console.log(alphaRange("f", "a"))