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

// Express's `.use` method creates middleware. That is
// to say that it intercepts a requests and allows you
// to do stuff with it. Here, we are intercepting all
// requests to the `/assets` directory and telling
// node to return the corrspeding request from the
// `__dirname/public` directory on the server. An exmple
// of this in use is shown in a `get` example below.
app.use('/assets', express.static(`${__dirname}/public`));

// We don't have to pass a path to the use method.
// We can simply pass a function. In the example below,
// I log the request url of each request to the console,
// then use Express's `next` method to allow the program
// to continue
app.use(function(req, res, next) {
   console.log(`Request URL: ${req.url}`);
   next();
});

app.get('/', function(req, res) {
    res.send('<html><head><link href="/assets/styles.css" type="text/css" rel="stylesheet" /><title>Express HTML</title></head><body><h1>I&rsquo;m Batman</h1><p>AKA: The Dark Knight</p><img width="1992" height="729" src="/assets/batman.png" /></body></html>');
});

app.listen(port);