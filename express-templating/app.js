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

// this is the Express way of defining what templating
// engine that youare using for your project. By
// default, express will look for your templates in
// a `/views` directory.
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    // when the `/` route is requested, Express will
    // look in the `/views` directory for a template
    // named `index.ejs`.
    // Note, we do _not_ need to include the ".ejs"
    // file extension in the argument passed to the
    // `.render` method. This is nice because all
    // we'd have to do to switch the rendering engine
    // is update one line of code above.
    res.render('index');
});

app.listen(port);