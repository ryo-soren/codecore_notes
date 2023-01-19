function delay(ms, val) {
    return new Promise((resolve, reject) => {   
        setTimeout(() => {
            resolve(val)
        }, ms);
    })
}

// We can return promises to use the value on the next .then int he chain...
delay(5000, "blue").then((val) => {
    console.log(val);
    return delay(3000, "red")
}).then((val) => {
    console.log(val);
    return delay(2000, "purple")
}).then((val) => {
    console.log(val);
}).catch((err) =>{
    console.log(new Error(`Error: ${err}`));
})