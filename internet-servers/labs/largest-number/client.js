const net = require("net")
const client = new net.Socket()

const ADDRESS = "localhost";
const PORT = 5000;

const numbers = [1,2,3,4,5,4,7,2,4]

client.on("data", (data) => {
    console.log(data.toString());
    client.end()
})

client.connect(PORT, ADDRESS, () => {
    client.write(numbers.toString())
});