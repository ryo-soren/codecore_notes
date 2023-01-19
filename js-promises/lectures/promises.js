// How to use promises before creating our own

const fs = require("fs").promises // all the same functions available, but just as promises

const p = fs.readFile("/Users/ryosorensen/code-core/js-promises/lectures/files-to-read/file1.txt", "utf8") // returns a promise

// p is promise (object) that represents an asynchronous action
// it will have a value sometime in the future
// so we are saving it as a variabl "p"

// we still have to pass the promise a callback, but not in the traditional way
// instead, we use a method called .then, which is a method that accepts a callback as its argument
// but in this case it is data that the callback is accepting

p.then((data) =>{
    console.log(data);
    return fs.readFile("/Users/ryosorensen/code-core/js-promises/lectures/files-to-read/file2.txt", "utf8")
}).then((data) => {
    console.log(data);
    return fs.readFile("/Users/ryosorensen/code-core/js-promises/lectures/files-to-read/file3.txt", "utf8")
}).then((data) => {
    console.log(data);
});

// the above looks much better than the callback hell in the callbacks
