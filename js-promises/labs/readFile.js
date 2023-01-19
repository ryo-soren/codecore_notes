const fs = require("fs")

function read(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, "utf8", (err, data) => {
            if(err){
                reject("No file found")
            }else{
                resolve(`Data from ${filepath} : ${data.toString()}`)
            }
        })
    })
}

read('/Users/ryosorensen/code-core/js-promises/labs/file.txt')

  .then(function (data) { console.log(data) })

  .catch(function (error) { console.error(error) })