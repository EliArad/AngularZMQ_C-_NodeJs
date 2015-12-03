'use_strict'
var express = require('express'),
    helpers = require('view-helpers'),
    bodyParser = require('body-parser'),
    moment    = require('moment');
var args = require('yargs').argv;
const bearerToken = require('express-bearer-token');
var app = express();
var jwtauth = require('./server/common/jwtauth');

var routes = require('./server/routes/commands')(app);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


port = args.port || 1500;

app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(
    "/", //the URL throught which you want to access to you static content
    express.static(__dirname) //where your static content is located in your filesystem
);


app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get('*', function(req, res){
    res.redirect('/#/');
});

app.post('*', function(req, res){
    res.redirect('/#/');
});


app.listen(port, function(){
    console.log("Running on port " + port);
});


