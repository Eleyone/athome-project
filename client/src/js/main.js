require([
    'backbone',
    'marionnette',
    'handlebars',
    'templates',
    'jquery',
    'underscore',
    'controller',
    'router'
], function (Backbone, Mn, Handlebars, JST, $, _, MainController, MainRouter) {

    AtHome.core = function(Backbone, Mn, Handlebars, JST, $, _, MainController, MainRouter) {
        // Fix < IE8
        $.ajaxSetup({cache: false});

        var app = new Mn.Application({container: '#athome-client-app'});

        app.addInitializer(function(options){
            app.views = {};
            app.data = {};
        });

        app.addInitializer(function(options){
            Handlebars.templates = JST;
        });

        app.addInitializer(function(options){

            app.controller = new MainController();

            app.router = new MainRouter({ controller: app.controller });

            Backbone.history.start({
                pushState: !(window.history && window.history.pushState),
                hashChange: true,
                root: '/',
                silent: true
            });
        });
    }(Backbone, Mn, Handlebars, JST, $, _, MainController, MainRouter);

    AtHome.core.vent.bind('app:log', function(msg) {
        console.log(msg);
    });

    AtHome.core.start();
});