/**
 * Created by lnwf9885 on 17/03/2016.
 */
var Marionette = require("backbone.marionette");

var DefaultRouter = Marionette.AppRouter.extend({
    appRoutes: {
        "#": "home",
        "profil/:id": "profil",
        "register": "register"
    }
});

module.exports = DefaultRouter;