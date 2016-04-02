/**
 * Created by lnwf9885 on 24/03/2016.
 */
var Marionette = require("backbone.marionette"),
    $ = require("jquery"),
    _ = require("underscore"),
    HomeController = require("./controllers/home");

var Controller = Marionette.Controller.extend({
    initialize: function () {
        AtHome.core.vent.trigger("app:log", "Controller: Initializing");
    },
    renderView: function (view) {
        this.destroyCurrentView(view);
        AtHome.core.vent.trigger("app:log", "Controller: Rendering new view.");
        $("#athome-client-app").html(view.render().el);
    },
    destroyCurrentView: function (view) {
        if (!_.isUndefined(window.App.views.currentView)) {
            AtHome.core.vent.trigger("app:log", "Controller: Destroying existing view.");
            AtHome.views.currentView.close();
        }
        AtHome.views.currentView = view;
    },
    home: HomeController,
});

module.exports = Controller;