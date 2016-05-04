/**
 * Created by lnwf9885 on 24/03/2016.
 */
var Marionette = require("backbone.marionette"),
    HomeController = require("./controllers/home"),
    LoginController = require("./controllers/login"),
    ErrorController = require("./controllers/error");

module.exports = Marionette.Object.extend({
    initialize: function () {
        console.log("init controller");
    },
    home: HomeController,
    login: LoginController
}, ErrorController);