function wait(n, val) {
    return new Promise((resolve, reject) => {
        if (val === "monkeys") {
            reject("no monkeys")
        } else {
            setTimeout(() => {
                resolve(`${n}, ${val}`)
            }, n);
        }
    })
}

module.exports = wait