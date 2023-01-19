const net = require("net")

const server = net.createServer((socket) =>{
    socket.on("data", (data) =>{
        console.log(`DATA: ${data}`);
        socket.write(data.reverse())
    })
})

const ADDRESS = "localhost";
const PORT = 5000;

server.listen(PORT, ADDRESS, () => {
    console.log(`Listening on ${ADDRESS}:${PORT}`);
})