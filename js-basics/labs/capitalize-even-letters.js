const input = process.argv
const sentence2 = input.slice(2)
let newSentence = ''
let index = 1

for (let word of sentence2) {
        
    for (let letter of word) {
        

        if (index % 2 === 0) {

            let upper = letter.toUpperCase();
            newSentence += upper
            
        } else {
            let lower = letter.toLowercase();
            newSentence += lower
        }
    }
        index++
}

console.log(newSentence);