/**
 * Created by lnwf9885 on 24/03/2016.
 */
var Marionette = require("backbone.marionette"),
    $ = require("jquery"),
    _ = require("underscore"),
    HomeController = require("./controllers/home");

var Controller = Marionette.Controller.extend({
    initialize: function () {
        window.App.core.vent.trigger("app:log", "Controller: Initializing");
    },
    renderView: function (view) {
        this.destroyCurrentView(view);
        window.App.core.vent.trigger("app:log", "Controller: Rendering new view.");
        $("#athome-client-app").html(view.render().el);
    },
    destroyCurrentView: function (view) {
        if (!_.isUndefined(window.App.views.currentView)) {
            window.App.core.vent.trigger("app:log", "Controller: Destroying existing view.");
            window.App.views.currentView.close();
        }
        window.App.views.currentView = view;
    },
    home: HomeController,
});

module.exports = Controller;