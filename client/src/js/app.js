/**
 * Created by lnwf9885 on 30/03/2016.
 */


var Marionette = require('backbone.marionette'),
    MainController = require('./controller'),
    MainRouter = require('./router');

module.exports = App = function App() {};

App.prototype.start = function () {
    // Fix < IE8
    $.ajaxSetup({cache: false});

    App.core = new Marionette.Application({container: '#athome-client-app'});

    app.addInitializer(function (options) {
        app.views = {};
        app.data = {};
    });

    app.addInitializer(function (options) {
        Handlebars.templates = JST;
    });

    app.addInitializer(function (options) {

        app.controller = new MainController();

        app.router = new MainRouter({controller: app.controller});

        Backbone.history.start({
            pushState: !(window.history && window.history.pushState),
            hashChange: true,
            root: '/',
            silent: true
        });
    });

    App.core.vent.bind('app:log', function (msg) {
        console.log(msg);
    });

    App.core.start();
};