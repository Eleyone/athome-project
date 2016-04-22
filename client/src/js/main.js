var App = require("./app"),
    $ = require("jquery");

// Fix < IE8
$.ajaxSetup({cache: false});

window.AtHome = App;
AtHome.start();