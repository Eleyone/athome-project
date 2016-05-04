/**
 * Created by lnwf9885 on 04/05/2016.
 */
var Marionette = require("backbone.marionette"),
    DeniedView = require("../views/app/denied"),
    ErrorView = require("../views/app/error");

module.exports = Marionette.Object.extend({
    denied: function () {
        AtHome.getRootLayout().showChildView('main', new DeniedView());
    },
    error: function () {
        AtHome.getRootLayout().showChildView('main', new ErrorView());
    },
});