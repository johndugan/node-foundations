var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

// It's important to reiiterate that we are not
// doing anything special here. We are just
// telling Express what file extension to look for.
// Regardless of what that is, the proper node
// module for the templating framework must be
// installed, ie: npm install ejs --save
app.set('view engine', 'ejs');

app.use('/assets', express.static(`${__dirname}/public`));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/item/:id/:sku', function(req, res) {
    res.render('item', {
        ID: req.params.id, // assign value from `:id` in URL
        SKU: req.params.sku, // assign value from `:sku` in URL
        Size: req.query.size, // assign value from query string, ie: ?size=Large
        Color: req.query.color // assign value from query string, ie: ?color=Red
    });
});

app.listen(port);