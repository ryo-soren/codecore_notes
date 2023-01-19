const net = require("net")

const server = net.createServer((socket) => {
    socket.on("data", (data) =>{
        let num = 0
        const strNum = data.toString()

        for (const number of strNum) {
            if (parseInt(number) > num) {
                num = number;
            }
        }
        console.log(num);
        socket.write(num);
    })
})

const ADDRESS = "localhost";
const PORT = 5000;

server.listen(PORT, ADDRESS, () => {
    console.log(`Listening on ${ADDRESS}:${PORT}`);
})