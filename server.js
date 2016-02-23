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

// Gestion des arguments de la ligne de commande
var knownOpts = {
        "daemon": Boolean,
        "help": Boolean
    }, shortHands = {
        "d": ['--daemon', 'true'],
        "h": ['--help', 'true']
    }, descOpts = {
        "daemon": "Start application as deamon",
        "help": "Show this help"
    }, defaultOpts = {
        "daemon": false,
        "help": false
    },
    parsed = nopt(knownOpts, shortHands, process.argv, 2),
    usage = noptUsage(knownOpts, shortHands, descOpts, defaultOpts);

if (parsed.help) {
    console.log('Usage: ');
    console.log(usage);
    process.exit(0);
}

if (parsed.daemon) {
    require('daemon')();
}

console.log("PID: ", process.pid);

var port = process.env.PORT || 3000;        // set our port
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

mongoose.connect('mongodb://localhost:27017/athome'); // connect to our database

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

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);