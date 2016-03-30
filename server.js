/**
 * Created by arnaud on 16/02/16.
 */
// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express'),
    bodyParser = require('body-parser'),
    handlebars = require('express-handlebars'),
    session = require('express-session'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    path = require('path'),
    nopt = require("nopt"),
    noptDefaults = require('nopt-defaults'),
    noptUsage = require("nopt-usage"),
    nconf = require("nconf"),
    fs = require('fs'),
    routers = require('./app/src/routers');

// Gestion des arguments de la ligne de commande
var knownOpts = {
        "port": String,
        "mongodb": String,
        "config": String,
        "daemon": Boolean,
        "save": Boolean,
        "help": Boolean,
        "env": String
    }, shortHands = {
        "p": ['--port', '3000'],
        "m": ['--mongodb', 'mongodb://localhost:27017'],
        "c": ['--config', './configs.json'],
        "d": ['--daemon', 'true'],
        "s": ['--save', 'true'],
        "h": ['--help', 'true'],
        "e": ['--env', 'prod']
    }, descOpts = {
        "port": "Application port",
        "mongodb": "MongoDB server address",
        "config": "Path to config file",
        "daemon": "Start application as deamon",
        "save": "Save command line config to config file",
        "help": "Show this help",
        "env": "Execution environment can be prod, dev, test respectly for Production, Developpment and Testing"
    }, defaultOpts = {
        "port": 3000,
        "mongodb": 'mongodb://localhost:27017',
        "config": './configs.json',
        "daemon": false,
        "save": false,
        "help": false,
        "env": "prod"
    },
    parsed = noptDefaults(nopt(knownOpts, shortHands, process.argv, 2), defaultOpts),
    usage = noptUsage(knownOpts, shortHands, descOpts, defaultOpts);

if (parsed.help) {
    console.log('Usage: ');
    console.log(usage);
    process.exit(0);
}

nconf.file({
    file: (parsed.config) ? parsed.config : defaultOpts['config']
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

var port = process.env.PORT || parsed.port || defaultOpts['port']; // set our port
var app = express();                 // define our app using express
var hbsEngine = handlebars.create({
    extname: ".hbs",
    defaultLayout: parsed.env,
    layoutsDir: "app/src/views/layouts/",
    partialsDir: "app/src/views/partials/"
});
app.set('views', 'app/src/views/');
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

mongoose.connect((parsed.mongodb || defaultOpts['mongodb']) + '/athome'); // connect to our database

// Initial dummy route for testing
// http://localhost:3000/

app.use(express.static(
    path.join(__dirname, 'public/' + parsed.env)
));
//routes list:
routers.initialize(app);

// START THE SERVER
// =============================================================================
app.listen(port);

console.log("PID: ", process.pid);
console.log('Magic happens on port ' + port);