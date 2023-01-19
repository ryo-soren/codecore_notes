const net = require("net");

const client = new net.Socket(); // socket represents a connection

const PORT = 5000;
const ADDRESS = "127.0.0.1";

client.on("data", function(data){
    console.log(`Data received from server: ${data}`);
    client.end(); // make sure to close the connection
}); // .on is another event listener, client.on is waiting for a response from the server

// connect is used to connect the client to the server 
// we provide the address and port of the server we want to connect to
client.connect(PORT, ADDRESS, function(){
    // when the client is connected to a server this callback function is called
    client.write("Ryo");
});

// RUN CLIENT AND SERVER IN TWO DIFFERENT TABS TO RUN ON CLI 

const client2 = new net.Socket();

client2.on("data", function(data){
    console.log(`Data received from server 2: ${data}`);
    client2.end(); // make sure to close the connection
}); // .on is another event listener, client.on is waiting for a response from the server

// connect is used to connect the client to the server 
// we provide the address and port of the server we want to connect to
client2.connect(PORT, ADDRESS, function(){
    // when the client is connected to a server this callback function is called
    client2.write("Ryo 2");
});
