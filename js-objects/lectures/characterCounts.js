function characterCounts(str) {
    const counts = {}

    for (const char of str.toLowerCase()) {
        if(counts[char]){
            counts[char]++
        }else{
            counts[char] = 1
        }
    }

    return counts;
}

const string = "An archer"

console.log(characterCounts(string));