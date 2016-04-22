/**
 * Created by lnwf9885 on 17/03/2016.
 */
var Marionette = require("backbone.marionette")
    Controller = require("./controller");

module.exports = Marionette.AppRouter.extend({
    appRoutes: {
        "": "home"
    },
    controller: new Controller()
});