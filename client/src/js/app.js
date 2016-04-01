/**
 * Created by lnwf9885 on 30/03/2016.
 */

var Marionette = require("backbone.marionette"),
    Backbone = require("backbone"),
    $ = require("jquery"),
    MainController = require("./controller"),
    MainRouter = require("./router");

var App = function App() {};

App.prototype.start = function () {
    // Fix < IE8
    $.ajaxSetup({cache: false});

    App.core = new Marionette.Application({container: "#athome-client-app"});

    App.core.addInitializer(function () {
        App.views = {};
        App.datas = {};
    });

    App.core.addInitializer(function () {

        App.core.controller = new MainController();

        App.core.router = new MainRouter({controller: App.core.controller});

        Backbone.history.start({
            pushState: !(window.history && window.history.pushState),
            hashChange: true,
            root: "/",
            silent: true
        });
    });

    App.core.vent.bind("app:log", function (msg) {
        console.log(msg);
    });

    App.core.start();
};

module.exports = App;