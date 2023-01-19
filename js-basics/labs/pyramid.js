let rows = process.argv[2]
let output = ""

for (let i = 1; i <= rows; i++) {
    for (let x = 1; x < (rows-1); x++){

        output += " "

    }
    for (let y = 0; y < (rows-1); y++) {
        output += "*"
        
    }
    output += "\n"
}

console.log(output);