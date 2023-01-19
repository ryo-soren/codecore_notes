function wordCounts(sentence){

    let counts = {}

    for (const word of sentence.split(" ")) {

        if (counts[word]) {
            // when using brackets to create a key-value pair
            // you are allowed to use an expression inside of 
            // the brackets. The value that is returned from 
            // the expression will be used as a key.

            // in our case, the expression is the variable
            // "word" which evaluates to the current word
            // in the iteration.

            counts[word]++;
        }else{
            counts[word] = 1
        }
    }

    return counts;
}

const str = "the sentence to check the word count"
console.log(wordCounts(str));

// Solution using for loop
const sentence = process.argv[2];
let words = sentence.split(" ");
const counterObject = {};

for (let i = 0; i < words.length; i++) {
  counterObject.hasOwnProperty(words[i])
    ? (counterObject[words[i]] = counterObject[words[i]] += 1)
    : (counterObject[words[i]] = 1);
}

console.log(counterObject);