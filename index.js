'use strict';

let express = require('express');
let app = express();

//import the express-handlebars
const exphbs  = require('express-handlebars');

//create a route
app.get("app", function (req, res) {
    res.send("Bill Settings WebApp");
});

//different route
app.get('/hello', function (req, res) {
    res.send('Hello codeX!');
});

let PORT = process.env.PORT || 3007;

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
});

//Configure the express-handlebars module
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//render a template
app.get('/', function (req, res) {
    res.render('home');
});