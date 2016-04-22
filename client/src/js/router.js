/**
 * Created by lnwf9885 on 17/03/2016.
 */
var Marionette = require("backbone.marionette")
    Controller = require("./controller");

var DefaultRouter = Marionette.AppRouter.extend({
    appRoutes: {
        "#": "home",
        "profil/:id": "profil",
        "register": "register"
    },
    controller: new Controller()
});

module.exports = DefaultRouter;