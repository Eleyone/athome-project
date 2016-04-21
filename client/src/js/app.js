/**
 * Created by lnwf9885 on 30/03/2016.
 */

var Marionette = require("backbone.marionette"),
    Backbone = require("backbone"),
    MainController = require("./controller"),
    MainRouter = require("./router");

var App = new Marionette.Application();

App.on("initialize:after", function () {

    var globalCh = Backbone.Wreqr.radio.channel("atHome");

    globalCh.on("app:log", function() {
        if (window.console) console.log(arguments);
    });

    App.controller = new MainController();

    App.router = new MainRouter({controller: App.controller});

    Backbone.history.start({
        pushState: !(window.history && window.history.pushState),
        hashChange: true,
        root: "/",
        silent: true
    });
});

module.exports = App;