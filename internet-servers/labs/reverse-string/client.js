const net = require("net")
const client = new net.Socket()

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const ADDRESS = "localhost";
const PORT = 5000;

function input() {
    rl.question("Please enter string: ", (input) => {
        client.write(input)
    });

};

client.on("data", (data) => {
    console.log(`reversed = ${data}`);
    input()
});

client.connect(PORT, ADDRESS, () => {
    input()
});