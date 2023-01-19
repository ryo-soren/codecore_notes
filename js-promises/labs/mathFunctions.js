function add(a, b = 0) {
    const sum = a + b
    return promise(a, b, sum);
}
function sub(a, b = 0) {
    const sum = a - b
    return promise(a, b, sum);
}
function mult(a, b = 1) {
    const sum = a * b
    return promise(sum);
}
function div(a, b = 1) {
    const sum = a / b
    return promise(sum);
}
function pow(a, b = a) {
    const sum = a ** b
    return promise(sum);
}

function promise(a, b, val){
    return new Promise((resolve, reject) => {
        if (val === val) {
            resolve(val)
        } else {
            if (typeof a !== "number") {
                reject(`${a} is not a number`)
            }else{
                reject(`${b} is not a number`)
            }
        }
    })
}
    

add(9)
.then((val) => add(9, val))
.then((val) => sub(15, val))
.then((val) => sub(val, "x"))
.then(console.log)
.catch(console.log);