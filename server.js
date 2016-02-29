/**
 * Created by arnaud on 16/02/16.
 */
// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var handlebars = require('express-handlebars');
var session = require('express-session');
var nopt = require("nopt");
var noptUsage = require("nopt-usage");
var nconf = require("nconf");
var fs = require('fs');

// Gestion des arguments de la ligne de commande
var knownOpts = {
        "port": String,
        "mongodb": String,
        "config": String,
        "daemon": Boolean,
        "save": Boolean,
        "help": Boolean
    }, shortHands = {
        "p": ['--port', '3000'],
        "m": ['--mongodb', 'mongodb://localhost:27017'],
        "c": ['--config', './config.json'],
        "d": ['--daemon', 'true'],
        "s": ['--save', 'true'],
        "h": ['--help', 'true']
    }, descOpts = {
        "port": "Application port",
        "mongodb": "MongoDB server address",
        "config": "Path to config file",
        "daemon": "Start application as deamon",
        "save": "Save command line config to config file",
        "help": "Show this help"
    }, defaultOpts = {
        "port": 3000,
        "mongodb": 'mongodb://localhost:27017',
        "config": './config.json',
        "daemon": false,
        "save": false,
        "help": false
    },
    parsed = nopt(knownOpts, shortHands, process.argv, 2),
    usage = noptUsage(knownOpts, shortHands, descOpts, defaultOpts);

if (parsed.help) {
    console.log('Usage: ');
    console.log(usage);
    process.exit(0);
}

nconf.file({
    file: parsed.config
});

if (parsed.save) {
    nconf.save(function (err) {
        fs.readFile(parsed.config, function (err, parsed) {
            console.dir(JSON.parse(parsed.toString()))
        });
    });
}

if (parsed.daemon) {
    require('daemon')();
}

console.log("PID: ", process.pid);

var port = process.env.PORT || parsed.port;        // set our port
var app = express();                 // define our app using express
var hbsEngine = handlebars.create({
    extname: ".hbs",
    defaultLayout: 'main',
    layoutsDir: "app/views/layouts/",
    partialsDir: "app/views/partials/"
});
app.set('views', 'app/views/');
app.engine('.hbs', hbsEngine.engine);
app.set('view engine', '.hbs');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use(session({
    secret: 'Super Secret Session Key',
    saveUninitialized: true,
    resave: true
}));

mongoose.connect(parsed.mongodb +'/athome'); // connect to our database

var router = express.Router();

// Initial dummy route for testing
// http://localhost:3000/
router.get('/', function (req, res) {
    res.json({message: 'You are running dangerously low on beer!'});
});
app.use('', router);

app.use('/api', require('./app/routers/oauth2'));
app.use('/api', require('./app/routers/client'));
app.use('/api', require('./app/routers/user'));
app.use('/api', require('./app/routers/book'));
app.use('/api', require('./app/routers/shelf'));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);