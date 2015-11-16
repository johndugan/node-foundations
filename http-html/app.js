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
    // store the contents of the `index.html` file in
    // a variable named `html`.
    var html = fs.readFileSync(`${__dirname}/index.html`);
    // send the response headers to the browser/client
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    // while responses are usually sent out as streams
    // using the `.write` method, we are going to go
    // ahead and call the `.end` method b/c this is just
    // a quick Hello World example.
    res.end(html);
// Tell our server what port to listen on and what host
// to listed at.
}).listen(1337, '127.0.0.1');