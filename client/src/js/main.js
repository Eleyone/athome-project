require([
    'backbone',
    'marionnette',
    'handlebars',
    'templates',
    'jquery',
    'underscore',
    'routers/default'
], function (Backbone, Mn, Handlebars, JST, $, _, DefaultRouter) {

    AtHome.app = function(Backbone, Mn, Handlebars, JST, $, _, DefaultRouter) {
        // Fix < IE8
        $.ajaxSetup({cache: false});

        var app = new Mn.Application({container: '#athome-client-app'});

        app.addInitializer(function(options){
            Handlebars.templates = JST;
        });

        app.addInitializer(function(options){
            Backbone.history.start({
                pushState: !(window.history && window.history.pushState),
                hashChange: true,
                root: '/',
                silent: true
            });
            // Initialize your routers here
            new DefaultRouter();

            // This will trigger your routers to start
            Backbone.history.loadUrl();

            new myAppRouter();

        });
    }(Backbone, Mn, Handlebars, JST, $, _, DefaultRouter);

    AtHome.app.start();
});