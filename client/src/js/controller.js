/**
 * Created by lnwf9885 on 24/03/2016.
 */
var Marionette = require("backbone.marionette"),
    HomeController = require("./controllers/home");

module.exports = Marionette.Object.extend({
    initialize: function(){
        console.log("init controller");
    },
    home: HomeController
});