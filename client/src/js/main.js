var Backbone = require("backbone"),
    Marionette = require("backbone.marionette"),
    App = require("./app"),
    $ = require("jquery");

// Fix < IE8
$.ajaxSetup({cache: false});

Marionette.Behaviors.behaviorsLookup = function () {
    return window.Behaviors;
};

window.AtHome = App;
AtHome.start();

// This will trigger your routers to start
Backbone.history.loadUrl();