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

// express allows us to handle URLs that have dynamic values.
// a good example of this would be something like an item SKU.
// you can see how we access the dynamic value on the `req`
// object below.
app.get('/item/:id', function(req, res){
    res.send(`<html><head><title>Express HTML</title></head><body><h1>Item: ${req.params.id}</h1></body></html>`);
});

// it's also worth noting that we can use multiple dynamic
// values, as shown below.
app.get('/item/:name/:sku', function(req, res){
    res.send(`<html><head><title>Express HTML</title></head><body><h1>Item: ${req.params.name}</h1><p>SKU: ${req.params.sku}</p></body></html>`);
});

app.listen(port);