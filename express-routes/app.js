var express = require('express'),
    app = express();

// assign the environment variable `PORT` to the
// local variable `port`. If the `PORT` variable
// is falsey (ie: it doesn't exist), then assign
// 3000 to `port`.

// on most Node servers, you can setup environment
// variables. So, whether the environement variable
// is named "PORT" or something else, it's important
// to know that this is something we define.
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    // Notice that express will automatically determine
    // proper the "Content-Type" to send in the headers.
    res.send('<html><head><title>Express HTML</title></head><body><h1>Hello from Express!</h1></body></html>');
});

app.get('/api', function(req, res) {
    var data = {
        "firstname": "John",
        "Lastname": "Doe",
        "email": "john@doe.com"
    };
    // here we are using a special `.json` method that
    // Express includes to return the `data` object
    // as json data.
    res.json(data);
});

app.listen(port);