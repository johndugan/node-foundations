// Assing http module from Node.js core to
// the `http` variable, and the fs module
// to the `fs` variable.
var http = require('http'),
    fs = require('fs');

// Call the `createServer` method on the http
// object and pass it a callback function that
// will be executed when a browser request is
// received.
http.createServer(function(req, res) {
    // send the response headers to the browser/client
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    // This is THE OPTIMAL WAY to handle servinc files
    // in node. Here we read the `index.html` file
    // and "pipe" chunks to the response using a "steam".
    // This is how we take avantage of perhaps Node's
    // largest competative advantage, performance.
    fs.createReadStream(`${__dirname}/index.html`).pipe(res);
// Tell our server what port to listen on and what host
// to listed at.
}).listen(1337, '127.0.0.1');