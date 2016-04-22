/**
 * Created by lnwf9885 on 24/03/2016.
 */
var Marionette = require("backbone.marionette"),
    HomeController = require("./controllers/home");

var Controller = Marionette.Controller.extend({
    initialize: function () {
        atHome.core.vent.trigger("app:log", "Controller: Initializing");
    },
    home: HomeController,
});

module.exports = Controller;