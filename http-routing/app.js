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

    if (req.url === '/') {
        // notes are in `../http-html-stream/app.js`
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream(`${__dirname}/index.html`).pipe(res);
    }

    else if (req.url === '/api') {
        // notes are in `../http-json/app.js`
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        var data = {
            "firstname": "John",
            "Lastname": "Doe",
            "email": "john@doe.com"
        };
        res.end(JSON.stringify(data));
    }

    else {
        res.writeHead(404);
        res.end();
    }

}).listen(1337, '127.0.0.1');