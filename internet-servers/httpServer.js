const http = require("http") // library used to create http servers
const url = require("url")

const server = http.createServer((request, response) =>{
    // request object represents a request being made by a client
    const params = url.parse(request.url, true)
    console.log(params);
    // console.log(request); 

    // response object represents the response to the clients that the server will build
    response.writeHead(200, {"Content-TYpe": "text/html"}) // when the server receives a response, it should send a response bnack to let the client know that we are going to be sending some html/text back.
    // content-type is a header that is used to determine what the content is coded as
    response.write(`<!DOCTYPE html>
    <html>
        <head>
        <title>My first web server</title>
        </head>
        <body>
            <h1>Hello World</h1>
        </body>
    </html>`);
    response.end(); // makes sure to end the response cycle and let the client know the response is done
});

const PORT = 8080;
const HOST = 'localhost'

server.listen(PORT, HOST);
console.log(`Server is listening on ${HOST}:${PORT}`);