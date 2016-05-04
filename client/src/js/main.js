var Backbone = require("backbone"),
    Marionette = require("backbone.marionette"),
    App = require("./app"),
    $ = require("jquery");

// Fix < IE8
$.ajaxSetup({
    statusCode: {
        401: function(){
            // Redirec the to the login page.
            window.location.replace('/#login');

        },
        403: function() {
            // 403 -- Access denied
            window.location.replace('/#denied');
        }
    },
    cache: false
});

Marionette.Behaviors.behaviorsLookup = function () {
    return window.Behaviors;
};

window.AtHome = App;
AtHome.start();

// This will trigger your routers to start
Backbone.history.loadUrl();