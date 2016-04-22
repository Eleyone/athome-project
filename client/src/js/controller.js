/**
 * Created by lnwf9885 on 24/03/2016.
 */
var Marionette = require("backbone.marionette"),
    $ = require("jquery"),
    _ = require("underscore"),
    HomeController = require("./controllers/home");

var Controller = Marionette.Controller.extend({
    initialize: function () {
        var globalCh = Backbone.Wreqr.radio.channel("atHome");
        globalCh.trigger("app:log", "Controller: Initializing");
    },
    home: HomeController,
});

module.exports = Controller;