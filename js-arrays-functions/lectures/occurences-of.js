function occurencesOf(char, str) {
    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (char === str[i]) {
            count++ // same as count += 1
        }
    }

    return count
}