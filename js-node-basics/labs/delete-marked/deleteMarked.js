const fs = require("fs")

const path = "./marked.csv"
let stringDelete = ""

fs.readFile(path, "utf8", (err, data) =>{

    if (err) {

        console.log(err);

    }else {
        const newLine = "\n"
        const linesArray = data.split(newLine)
        
        linesArray.forEach((line, index) => {

            if (line.includes("yes") !== true) {
                console.log(`Added line ${index+1}: ${line}`);
                stringDelete += line + "\n"
            }
        })

        fs.writeFile("./deleted.csv", stringDelete, err =>{
            if (err) {
                console.log(err);
            }
        })
                        
    }

})
