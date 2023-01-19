const sentence = process.argv.slice(2)
let newSentence = ''
let newLetter = ''

for (const word of sentence) {
    for (const letter of word) {
        if (letter == letter.toUpperCase()) {
            newLetter = letter.toLowerCase();
            newSentence += newLetter
        }else if(letter == letter.toLowerCase()){
            newLetter = letter.toUpperCase();
            newSentence += newLetter
        }else{
            continue
        }
    }
    newSentence += " "
}

console.log(newSentence);