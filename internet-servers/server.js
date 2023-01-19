// TCP server

const net = require("net"); // built in module on node that is used for creating TCP servers 
const server = net.createServer(function(socket){  
    // takes in callback function 
    // is an event listener - event listener is a function that will trigger on a specified event
    // "socket" argument is an objet that represents a connection
    socket.on("data", (data) => {
        // data event listener - whenever the server receives "data" it will trigger this callback
        // the data argument represents the data coming form the client request 
        console.log(`Server got data: ${data.toString()}`);
        socket.write(`Hello, ${data.toString()}`)
    })

    socket.on("end", () => {
        console.log("-------- Connection closed --------");
    }); // lister for end on client
})

const ADDRESS = "127.0.0.1"; // or "localhose" -> loopback address
const PORT = 5000; // can choose any port 5000 is a common port for webdev

// server.listen is used to make the server listen for requests from clients at a given port and address
server.listen(PORT, ADDRESS, () => {
    console.log(`Server is listening on: ${ADDRESS}:${PORT}`);
})
